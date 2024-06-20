const express = require("express");
const { body } = require("express-validator");
const multer = require("multer");
const {
  getCultureCategoryDetailsRecord,
  createCultureCategoryDetailsRecord,
  updateCultureCategoryDetailsRecord,
  deleteCultureCategoryDetailsRecord,
  getAllCultureCategoryDetailsRecord 
} = require("../controllers/cultureCategoryDetailsController");
const { upload } = require("../controllers/cultureCategoryDetailsController");
const verifyToken = require("../JWT/auth");

const router = express.Router();

router.get("/getallCultureDetails", verifyToken, async (req, res) => {
    try {
        await getAllCultureCategoryDetailsRecord(req, res);
    } catch (error) {
        console.error("Error in getAllCultureCategoryDetailsRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/getCultureDetails", verifyToken, async (req, res) => {
    try {
        await getCultureCategoryDetailsRecord(req, res);
    } catch (error) {
        console.error("Error in getCultureCategoryDetailsRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get("/getallCultureDetailsRecord", async (req, res) => {
    try {
        await getAllCultureCategoryDetailsRecord(req, res);
    } catch (error) {
        console.error("Error in getAllCultureCategoryDetailsRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/getCultureDetailsRecord", async (req, res) => {
    try {
        await getCultureCategoryDetailsRecord(req, res);
    } catch (error) {
        console.error("Error in getCultureCategoryDetailsRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/createCultureDetails',verifyToken,
    upload.fields([{ name: 'img', maxCount: 1 }]),
    [
        body('category').notEmpty().withMessage('Category cannot be empty')
    ],
    async (req, res) => {
        try {
            await createCultureCategoryDetailsRecord(req, res);
        } catch (error) {
            console.error("Error in createCultureCategoryDetailsRecord:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
);

router.put("/update/:id", verifyToken,
    upload.fields([{ name: 'img', maxCount: 1 }]), 
    async (req, res) => {
    try {
        await updateCultureCategoryDetailsRecord(req, res);
    } catch (error) {
        console.error("Error in updateCultureCategoryDetailsRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
    try {
        await deleteCultureCategoryDetailsRecord(req, res);
    } catch (error) {
        console.error("Error in deleteCultureCategoryDetailsRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
