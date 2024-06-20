const express = require('express');
const { body } = require('express-validator');
const { getCultureCategoryRecords, createCultureCategoryRecord, updateCultureCategoryRecord, deleteCultureCategoryRecord } = require('../controllers/cultureCategoryController');
const verifyToken = require('../JWT/auth');

const router = express.Router();

router.get('/getCultureCategory', verifyToken, async (req, res) => {
    try {
        await getCultureCategoryRecords(req, res);
    } catch (error) {
        console.error("Error in getCultureCategoryRecords:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/getCultureCategoryRecord', async (req, res) => {
    try {
        await getCultureCategoryRecords(req, res);
    } catch (error) {
        console.error("Error in getCultureCategoryRecords:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/createCultureCategory', verifyToken, [
    body('category').notEmpty().withMessage('Category cannot be empty'),
], async (req, res) => {
    try {
        await createCultureCategoryRecord(req, res);
    } catch (error) {
        console.error("Error in createCultureCategoryRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.put('/update/:id', verifyToken, async (req, res) => {
    try {
        await updateCultureCategoryRecord(req, res);
    } catch (error) {
        console.error("Error in updateCultureCategoryRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete('/delete/:id', verifyToken, async (req, res) => {
    try {
        await deleteCultureCategoryRecord(req, res);
    } catch (error) {
        console.error("Error in deleteCultureCategoryRecord:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
