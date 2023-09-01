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
router.post("/register", (req, res, next) => {
  // * Declarations of all vendor app info
  const brandName = req.body.brandName;
  const websiteURL = req.body.websiteURL;
  const businessType = req.body.businessType;
  const email = req.body.email;
  const password = encryptLib.encryptPassword(req.body.password);
  const reEnterPassword = req.body.reEnterPassword;
  const country = req.body.country;
  const productCategories = req.body.productCategories;
  const numberOfProducts = req.body.numberOfProducts;
  const giveBack = req.body.giveBack;
  const giveBackDescriptionFieldInput = req.body.giveBackDescriptionFieldInput;
  const nonProfitPartner = req.body.nonProfitPartner;
  const nonProfitPartnerDescriptionFieldInput =
    req.body.nonProfitPartnerDescriptionFieldInput;
  const howDidYouHear = req.body.howDidYouHear;
  const userGroup = req.body.userGroup;

  // Determine 'authorizationLevel' based on the 'userGroup'
  // If 'userGroup' is "Admin", set 'authorizationLevel' to 1, otherwise set it to 0
  const authorizationLevel = userGroup === "Admin" ? 1 : 0;

  // * Queries
  // For adding to email, password, and authorization level to 'user' table
  const registerNewUserQuery = `INSERT INTO "user" (email, password, authorization_level)
      VALUES ($1, $2, $3) RETURNING id`;

  // For adding all vendor application form data to 'vendor_app_info' table
  // ! needs user id for insertion
  // ! also may need to create query for adding a status for this new user
  const vendorAppInfoQuery = `INSERT INTO "vendor_app_info" 
  (brand_name,
    website_url,
    business_type,
    country,
    selected_categories,
    number_of_products,
    giveback_selection,
    giveback_description, 
    nonprofit_selection ,
    nonprofit_description ,
    heard_about_us) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) 
    WHERE "user"."id" LIKE $`; // Add vendor app form query
  pool
    .query(registerNewUserQuery, [email, password, authorizationLevel])
    .then(() => res.sendStatus(201))
    // ! Second Query Below: new vendor application (already ordered correctly)
    // .query(vendorAppInfoQuery, [
    //   brandName,
    //   websiteURL,
    //   businessType,
    //   email,
    //   password,
    //   reEnterPassword,
    //   country,
    //   productCategories,
    //   numberOfProducts,
    //   giveBack,
    //   giveBackDescriptionFieldInput,
    //   nonProfitPartner,
    //   nonProfitPartnerDescriptionFieldInput,
    //   howDidYouHear,
    // ]) // Second query: new vendor application (already ordered correctly)
    // .then(
    //   () => res.sendStatus(201),
    //   console.log("Vendor application form data stored.")
    // )
    .catch((err) => {
      console.log("User registration failed: ", err);
      res.sendStatus(500);
    });
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
