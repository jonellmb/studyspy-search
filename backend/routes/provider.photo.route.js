const express = require("express");
const router = express.Router();

const {
    photo,
    providerById,
    read
} = require("../controllers/provider.photo");

router.get("/:providerId", read);
router.param("providerId", providerById);
router.get("/photo/:providerId", photo);
module.exports = router;