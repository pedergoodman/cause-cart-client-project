const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get("/", rejectUnauthenticated, (req, res) => {
    const queryText = `
      SELECT 
      vendor_app_info.id,
      vendor_app_info.brand_name as "brand_name",
      vendor_app_info.number_of_products as "number_of_products",
      vendor_app_info.date_created as "date_created",
      VendorStatus.name as "status",
      Onboarding.name as "onboarding_stage",
      SDG.name as "sdg"
    FROM vendor_app_info
    JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id
    JOIN Onboarding ON vendor_app_info.onboarding_stage_id = Onboarding.id
    JOIN SDG ON vendor_app_info.sdg_id = SDG.id;
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


// router.get("/", rejectUnauthenticated, (req, res) => {
//     const queryText = `
//       SELECT 
//       vendor_app_info.id,
//       vendor_app_info.brand_name as name,
//       vendor_app_info.number_of_products as "numberOfProducts",
//       vendor_app_info.date_created as "intakeDate",
//       VendorStatus.name as "onboardingStage",
//       SDG.name as "SDGs"
//     FROM vendor_app_info
//     JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id
//     JOIN SDG ON vendor_app_info.sdg_id = SDG.id;
//     `;
  
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
  

// ** V1 - Works to GET but mismatch of rendering data **
// router.get("/", rejectUnauthenticated, (req, res) => {
//     const queryText = `
//     SELECT 
//     vendor_app_info.id,
//     vendor_app_info.brand_name as name,
//     vendor_app_info.number_of_products as "numberOfProducts",
//     vendor_app_info.date_created as "intakeDate",
//     VendorStatus.name as "onboardingStage"
//   FROM vendor_app_info
//   JOIN VendorStatus ON vendor_app_info.status_id = VendorStatus.id;
//   `;
  
//   pool
//     .query(queryText)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error GETting vendors for admin vendor's list: ", error);
//       res.status(500);
//     });
// });

module.exports = router;
