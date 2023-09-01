const express = require("express");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post("/register", async (req, res, next) => {
  const password = encryptLib.encryptPassword(req.body.password);
  const client = await pool.connect()

  const userGroup = req.body.userGroup;
  // Determine 'authorizationLevel' based on the 'userGroup'
  // If 'userGroup' is "Admin", set 'authorizationLevel' to 1, otherwise set it to 0
  const authorizationLevel = userGroup === "Admin" ? 1 : 0;

  try {


    // * Declarations of all vendor app info
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
      howDidYouHear
    } = req.body

    // setting initial date
    const initialDate = new Date();

    // * Queries
    // For adding to email, password, and authorization level to 'user' table
    const registerNewUserQuery = `INSERT INTO "user" (email, password, authorization_level)
      VALUES ($1, $2, $3) RETURNING id`;


    // // For adding all vendor application form data to 'vendor_app_info' table
    const vendorAppInfoQuery = `INSERT INTO "vendor_app_info" 
    (
      brand_name, 
      website_url, 
      business_type, 
      country, 
      number_of_products,
      heard_about_us, 
      giveback_selection, 
      user_id, 
      giveback_description,
      nonprofit_selection, 
      nonprofit_description, 
      selected_categories,
      date_created, 
      date_edited, 
      status_id 
    ) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $13, $14)`;

    await client.query('BEGIN')

    const createdUserId = await pool.query(registerNewUserQuery, [email, password, authorizationLevel])


    console.log('createdUserId is:', createdUserId);
    // ! Second Query Below: new vendor application 
    await pool.query(vendorAppInfoQuery, [
      brandName,
      websiteURL,
      businessType,
      country,
      numberOfProducts,
      howDidYouHear,
      giveBack,
      createdUserId.rows[0].id,
      giveBackDescriptionFieldInput,
      nonProfitPartner,
      nonProfitPartnerDescriptionFieldInput,
      productCategories,
      initialDate,
      1
    ])

    await client.query('COMMIT')
    res.sendStatus(201);

  } catch (error) {
    await client.query('ROLLBACK')
    console.log("User registration failed: ", error);
    res.sendStatus(500);
  } finally {
    client.release()
  }


}); // end register user and vendor app info post request





// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
// router.post("/login", userStrategy.authenticate("local"), (req, res) => {
//   res.sendStatus(200);
// });

router.post("/login", (req, res, next) => {
  console.log(req.body);
  console.log(req.headers);
  userStrategy.authenticate("local")(req, res, next);
}, (req, res) => {
  res.sendStatus(200);
});


// clear all server session information about this user
router.post("/logout", (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
