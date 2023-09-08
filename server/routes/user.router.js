const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// * Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// * Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", async (req, res, next) => {
  const password = encryptLib.encryptPassword(req.body.password);
  const client = await pool.connect();

  const userGroup = req.body.userGroup;
  // Determine 'authorizationLevel' based on the 'userGroup'
  // If 'userGroup' is "Admin", set 'authorizationLevel' to 1, otherwise set it to 0
  const authorizationLevel = userGroup === "Admin" ? 1 : 0;

  // pull out all values from req.body
  const {
    brandName,
    websiteURL,
    businessType,
    email,
    country,
    productCategories,
    numberOfProducts,
    giveBack,
    giveBackDescriptionFieldInput,
    nonProfitPartner,
    nonProfitPartnerDescriptionFieldInput,
    howDidYouHear,
  } = req.body;

  // * Queries
  // For adding to email, password, and authorization level to 'user' table
  const registerNewUserQuery = `
        INSERT INTO "user" (email, password, authorization_level)
        VALUES ($1, $2, $3) RETURNING id
      `;

  // For adding all vendor application form data to 'vendor_app_info' table
  const vendorAppInfoQuery = `
      INSERT INTO "vendor_app_info" 
      (
        user_id, 
        brand_name, 
        website_url, 
        business_type, 
        country,
        number_of_products,

        heard_about_us, 
        giveback_selection, 
        giveback_description,
        nonprofit_selection,
        nonprofit_description, 
        selected_categories,

        date_created, 
        date_edited, 
        status_id 
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $13, $14);
    `;


  //  * Declarations of all vendor app info
  try {
    await client.query("BEGIN");

    // registration for admin, 
    if (userGroup === "Admin") {
      await client.query(registerNewUserQuery, [
        req.body.email,
        password,
        authorizationLevel,
      ]);
      await client.query("COMMIT");
      res.sendStatus(201);
      return;
    }

    console.log('in registration, req.body is:', req.body);

    const initialDate = new Date(); // setting initial date

    // * Begin SQL query
    await client.query("BEGIN");

    // create user in database, return id
    const createdUserId = await pool.query(registerNewUserQuery, [
      email,
      password,
      authorizationLevel,
    ]);

    // ! Second Query Below: new vendor application
    await client.query(vendorAppInfoQuery, [
      createdUserId.rows[0].id,
      brandName,
      websiteURL,
      businessType,
      country,
      numberOfProducts,

      howDidYouHear,
      giveBack,
      giveBackDescriptionFieldInput,
      nonProfitPartner,
      nonProfitPartnerDescriptionFieldInput,
      productCategories,

      initialDate,
      1,
    ]);

    // end and commit query to database, sey complete status
    await client.query("COMMIT");
    res.sendStatus(201);


  } catch (error) {
    // rollback if any errors occur
    await client.query("ROLLBACK");
    console.log("User registration failed: ", error);
    res.sendStatus(500);
  } finally {
    client.release();
  }
}); // end register user and vendor app info post request

// logged in vendor info for frontend
// * GET request to retrieve user data using user_id using parameterization
// Handles retrieving all data  from vendor_app_info table of currently logged in vendor
router.get("/login/:userID", (req, res) => {
  // Extract the userID from the request parameters
  const userID = req.params.userID;

  // * Query
  const getVendorInfoQuery = `
    SELECT 
      "user".id,
      "user".email, 
      vendor_info.*, 
      template_links.*,
      template_links.link AS "sentContractLink",
      status.status
    FROM vendor_app_info AS vendor_info
    JOIN "user"
      ON vendor_info.user_id = "user".id
    JOIN status 
      ON vendor_info.status_id = status.id
    JOIN template_links 
      ON sent_contract_link = template_links.id
    WHERE "user".id = $1;
  `;

  pool
    .query(getVendorInfoQuery, [userID])
    .then((result) => {
      console.log("Vendor data received!");
      console.log("Result.rows is:", result.rows[0]);
      // Send the retrieved vendor info
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.error(
        "Error retrieving vendor information. Error:  query:",
        error
      );
      res.sendStatus(500);
    });
}); // end '/login:userID' route

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post(
  "/login",
  (req, res, next) => {
    console.log(req.body);
    console.log(req.headers);
    userStrategy.authenticate("local")(req, res, next);
  },
  (req, res) => {
    res.sendStatus(200);
  }
); // end '/login' route

// * clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
}); // end '/logout'

module.exports = router;
