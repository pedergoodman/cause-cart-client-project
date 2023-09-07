const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET request to list of vendors
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `
      SELECT 
      vendor_app_info.id,
      vendor_app_info.brand_name as "brand_name",
      vendor_app_info.number_of_products as "number_of_products",
      vendor_app_info.date_edited as "date_edited",
      status.status as "status",
      "status".id as "onboardingStatusId",
      vendor_app_info.is_active as "is_active"
    FROM vendor_app_info
    JOIN status ON vendor_app_info.status_id = status.id
    `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GETting vendors for admin vendor's list: ", error);
      res.sendStatus(500);
    });
});

router.get("/templates", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM template_links;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error getting template_links", error);
      res.sendStatus(500);
    });
});

// ! can't be protected route, needs to grab for registration page
// if we need to make it protected we'll need to make a new route for registration page
router.get("/category", (req, res) => {
  const queryText = `SELECT * FROM category_names;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error getting category_names", error);
      res.sendStatus(500);
    });
});

// GET request to fetch data unique to a specific vendor
router.get("/:id", rejectUnauthenticated, (req, res) => {
  const vendorId = req.params.id;
  console.log("Received vendorId: ", vendorId);
  const queryText = `
  SELECT 
  "vendor_app_info".id,
  "vendor_app_info".brand_name as "vendorName",
  "user".email,
  "vendor_app_info".website_url as "website",
  "vendor_app_info".business_type as "businessType",
  "vendor_app_info".selected_categories as "primaryProductCategory",
  "vendor_app_info".country,
  "vendor_app_info".number_of_products as "numberOfProducts",
  "vendor_app_info".giveback_selection as "vendorGiveback",
  "vendor_app_info".giveback_description as "givebackDescription",
  "vendor_app_info".nonprofit_selection as "partnerNonProfit",
  "vendor_app_info".nonprofit_description as "nonprofitDescription",
  "vendor_app_info".heard_about_us as "hearAboutUs",
  "vendor_app_info".date_created as "intakeDate",
  "vendor_app_info".date_edited as "dateEdited",
  "status".status as "onboardingStatus",
  "status".id as "onboardingStatusId",
  "vendor_app_info".is_active as "is_active",
  "vendor_app_info".dropbox_folder_path as "dropboxFolderPath",
  "vendor_app_info".dropbox_shared_link as "dropboxSharedLink"
  FROM vendor_app_info
  JOIN "user" ON vendor_app_info.user_id = "user".id
  JOIN "status" ON vendor_app_info.status_id = "status".id
  WHERE "vendor_app_info".id = $1;
  `;

  pool
    .query(queryText, [vendorId])
    .then((result) => {
      console.log("Results from database: ", result);
      const vendorData = result.rows[0];
      res.send([vendorData]);
    })
    .catch((error) => {
      console.error("Error GETting vendor details: ", error);

      if (error.code === "ECONNREFUSED") {
        res.status(500).send("Database connection was refused.");
      } else {
        res.status(500).send("An unknown error occurred.");
      }
    });
});

router.put("/onboarding/:id", rejectUnauthenticated, (req, res) => {
  const vendorId = req.params.id;
  const newStatus = req.body.status;
  const dateEdited = new Date();

  const queryText = `
          UPDATE vendor_app_info 
          SET status_id = (SELECT id FROM status WHERE status = $1),
          is_active = CASE WHEN $1 = 'Onboarding Complete' THEN true ELSE is_active END,
          date_edited = $3
          WHERE id = $2
          RETURNING status_id;
        `;

  pool
    .query(queryText, [newStatus, vendorId, dateEdited])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log("Error updating onboarding stage: ", error);
      res.sendStatus(500);
    });
});

// TODO: UPDATE AND COMPLETE DELETE VENDOR
// router.delete("/:id", rejectUnauthenticated, async (req, res) => {
//   const client = await pool.connect();

//   try {
//     await client.query("BEGIN"); // Start transaction

//     const vendorId = req.params.id;

//     // First, get the user_id associated with the vendor
//     const userQuery = 'SELECT user_id FROM "vendor_app_info" WHERE id=$1';
//     const userResult = await client.query(userQuery, [vendorId]);

//     if (userResult.rows.length === 0) {
//       throw new Error("Vendor not found");
//     }

//     const userId = userResult.rows[0].user_id;

//     // Now, delete the vendor
//     const deleteVendorQuery = 'DELETE FROM "vendor_app_info" WHERE id=$1';
//     await client.query(deleteVendorQuery, [vendorId]);

//     // Finally, delete the associated user
//     const deleteUserQuery = 'DELETE FROM "user" WHERE id=$1';
//     await client.query(deleteUserQuery, [userId]);

//     await client.query("COMMIT"); // Commit transaction

//     res.sendStatus(200);
//   } catch (error) {
//     await client.query("ROLLBACK"); // Rollback transaction in case of error
//     console.log("Error deleting specific vendor entry", error);
//     res.sendStatus(500);
//   } finally {
//     client.release();
//   }
// });

module.exports = router;
