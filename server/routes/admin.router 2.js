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
      vendor_app_info.is_active as "is_active"
    FROM vendor_app_info
    JOIN status ON vendor_app_info.status_id = status.id
    `
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

// GET request to fetch data unique to a specific vendor
  router.get("/:id", rejectUnauthenticated, (req, res) => {
  const vendorId = req.params.id;
  const queryText = `
  SELECT 
  vendor_app_info.id,
  vendor_app_info.brand_name as "vendorName",
  "user".email,
  vendor_app_info.website_url as "website",
  vendor_app_info.business_type as "businessType",
  vendor_app_info.country,
  category_names.name as "primaryProductCategory",
  vendor_app_info.number_of_products as "numberOfProducts",
  vendor_app_info.giveback_selection as "vendorGiveback",
  vendor_app_info.giveback_description as "givebackDescription",
  vendor_app_info.nonprofit_selection as "partnerNonProfit",
  vendor_app_info.nonprofit_description as "nonprofitDescription",
  vendor_app_info.heard_about_us as "hearAboutUs",
  vendor_app_info.date_created as "intakeDate",
  status.status as "status"
FROM vendor_app_info
JOIN "user" ON vendor_app_info.user_id = "user".id
JOIN status ON vendor_app_info.status_id = status.id
WHERE vendor_app_info.id = $1;
`;



  pool
    .query(queryText, [vendorId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GETting vendor details: ", error);
      res.sendStatus(500);
    });
});

  router.put("/onboarding/:id", rejectUnauthenticated, (req, res) => {
  const vendorId = req.params.id;
  const newStatus = req.body.status;

  const queryText = `
      UPDATE vendor_app_info 
      SET status_id = (SELECT id FROM status WHERE status = $1),
      is_active = CASE WHEN $1 = 'Onboarding Complete' THEN true ELSE is_active END
      WHERE id = $2
      RETURNING status_id;
    `;

  pool
    .query(queryText, [newStatus, vendorId])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log("Error updating onboarding stage: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;




// const express = require("express");
// const router = express.Router();
// const pool = require("../modules/pool");
// const {
//   rejectUnauthenticated,
// } = require("../modules/authentication-middleware");

// // GET request to list of vendors
// router.get("/", (req, res) => {
//   const queryText = `
//       SELECT 
//       vendor_app_info.id,
//       vendor_app_info.brand_name as "brand_name",
//       vendor_app_info.number_of_products as "number_of_products",
//       vendor_app_info.date_created as "date_created",
//       VendorStatus.name as "status",
//       Onboarding.name as "onboarding_stage",
//       SDG.name as "sdg"
//     FROM vendor_app_info
//     JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id
//     JOIN Onboarding ON vendor_app_info.onboarding_stage_id = Onboarding.id
//     JOIN SDG ON vendor_app_info.sdg_id = SDG.id;
//     `;

//   pool
//     .query(queryText)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error GETting vendors for admin vendor's list: ", error);
//       res.sendStatus(500);
//     });
// });

// // GET request to fetch data unique to a specific vendor
// router.get("/:id", (req, res) => {
//   const vendorId = req.params.id;
//   const queryText = `
//   SELECT 
//   vendor_app_info.id,
//   vendor_app_info.brand_name as "vendorName",
//   vendor_app_info.email,
//   vendor_app_info.website_url as "website",
//   vendor_app_info.business_type as "businessType",
//   category_names.name as "primaryProductCategory",
//   vendor_app_info.country,
//   vendor_app_info.number_of_products as "numberOfProducts",
//   vendor_app_info.giveback as "vendorGiveback",
//   vendor_app_info.giveback_description as "givebackDescription",
//   vendor_app_info.partner_with_nonprofit as "partnerNonProfit",
//   vendor_app_info.nonprofit_name as "nonprofitName",
//   vendor_app_info.heard_about_us as "hearAboutUs",
//   vendor_app_info.date_created as "intakeDate",
//   Onboarding.name as "onboardingStage",
//   SDG.name as "SDGs"
//   FROM vendor_app_info
//   JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id
//   JOIN SDG ON vendor_app_info.sdg_id = SDG.id
//   JOIN Onboarding ON vendor_app_info.onboarding_stage_id = Onboarding.id
//   JOIN category_names ON vendor_app_info.primary_category = category_names.id
//   WHERE vendor_app_info.id = $1;
// `;

//   pool
//     .query(queryText, [vendorId])
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error GETting vendor details: ", error);
//       res.sendStatus(500);
//     });
// });

// router.put("/onboarding/:id", (req, res) => {
//   const vendorId = req.params.id;
//   const newOnboardingStage = req.body.onboarding_stage;

//   const queryText = `
//       WITH updated AS (
//         UPDATE vendor_app_info 
//         SET onboarding_stage_id = (SELECT id FROM Onboarding WHERE name = $1),
//         status_id = CASE WHEN $1 = 'Approved Product' THEN (SELECT id FROM VendorStatus WHERE name = 'Active') ELSE status_id END
//         WHERE id = $2
//         RETURNING status_id
//       )
//       SELECT name FROM VendorStatus WHERE id = (SELECT status_id FROM updated);
//     `;

//   pool
//     .query(queryText, [newOnboardingStage, vendorId])
//     .then((result) => {
//       res.send(result.rows[0]);
//     })
//     .catch((error) => {
//       console.log("Error updating onboarding stage: ", error);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;

// ** TODO: REINSTATE AFTER TESTING TODO: **
// GET request to list of vendors
// router.get("/", rejectUnauthenticated, (req, res) => {
//     const queryText = `
//         SELECT
//         vendor_app_info.id,
//         vendor_app_info.brand_name as "brand_name",
//         vendor_app_info.number_of_products as "number_of_products",
//         vendor_app_info.date_created as "date_created",
//         VendorStatus.name as "status",
//         Onboarding.name as "onboarding_stage",
//         SDG.name as "sdg"
//       FROM vendor_app_info
//       JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id
//       JOIN Onboarding ON vendor_app_info.onboarding_stage_id = Onboarding.id
//       JOIN SDG ON vendor_app_info.sdg_id = SDG.id;
//       `;

//     pool
//       .query(queryText)
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch((error) => {
//         console.log("Error GETting vendors for admin vendor's list: ", error);
//         res.sendStatus(500);
//       });
//   });

//   // GET request to fetch data unique to a specific vendor
//   router.get("/:id", rejectUnauthenticated, (req, res) => {
//     const vendorId = req.params.id;
//     const queryText = `
//     SELECT
//     vendor_app_info.id,
//     vendor_app_info.brand_name as "vendorName",
//     vendor_app_info.email,
//     vendor_app_info.website_url as "website",
//     vendor_app_info.business_type as "businessType",
//     category_names.name as "primaryProductCategory",
//     vendor_app_info.country,
//     vendor_app_info.number_of_products as "numberOfProducts",
//     vendor_app_info.giveback as "vendorGiveback",
//     vendor_app_info.giveback_description as "givebackDescription",
//     vendor_app_info.partner_with_nonprofit as "partnerNonProfit",
//     vendor_app_info.nonprofit_name as "nonprofitName",
//     vendor_app_info.heard_about_us as "hearAboutUs",
//     vendor_app_info.date_created as "intakeDate",
//     Onboarding.name as "onboardingStage",
//     SDG.name as "SDGs"
//     FROM vendor_app_info
//     JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id
//     JOIN SDG ON vendor_app_info.sdg_id = SDG.id
//     JOIN Onboarding ON vendor_app_info.onboarding_stage_id = Onboarding.id
//     JOIN category_names ON vendor_app_info.primary_category = category_names.id
//     WHERE vendor_app_info.id = $1;
//   `;

//     pool
//       .query(queryText, [vendorId])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch((error) => {
//         console.log("Error GETting vendor details: ", error);
//         res.sendStatus(500);
//       });
//   });

//   router.put("/onboarding/:id", rejectUnauthenticated, (req, res) => {
//       const vendorId = req.params.id;
//       const newOnboardingStage = req.body.onboarding_stage;

//       const queryText = `
//         WITH updated AS (
//           UPDATE vendor_app_info
//           SET onboarding_stage_id = (SELECT id FROM Onboarding WHERE name = $1),
//           status_id = CASE WHEN $1 = 'Approved Product' THEN (SELECT id FROM VendorStatus WHERE name = 'Active') ELSE status_id END
//           WHERE id = $2
//           RETURNING status_id
//         )
//         SELECT name FROM VendorStatus WHERE id = (SELECT status_id FROM updated);
//       `;

//       pool
//         .query(queryText, [newOnboardingStage, vendorId])
//         .then((result) => {
//           res.send(result.rows[0]);
//         })
//         .catch((error) => {
//           console.log("Error updating onboarding stage: ", error);
//           res.sendStatus(500);
//         });
//   });
