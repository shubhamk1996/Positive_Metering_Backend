// recordsController.js
const { validationResult } = require('express-validator');
const recordModel = require('../models/cultureCategoryModal');

function getCultureCategoryRecords(req, res) {
    try {
        recordModel.getAllRecords((err, results) => {
            if (err) {
                console.error('Error fetching records:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(results);
        });
    } catch (error) {
        console.error('Error in getCultureCategoryRecords:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function createCultureCategoryRecord(req, res) {
    try {
        const errors = validationResult(req);
        const recordData = req.body;
        recordModel.createRecord(recordData, (err, result) => {
            if (err) {
                console.error('Error creating record:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(201).json({ message: 'Record created successfully', result: recordData });
        });
    } catch (error) {
        console.error('Error in createCultureCategoryRecord:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function updateCultureCategoryRecord(req, res) {
    try {
        const { id } = req.params;
        const recordData = req.body;
        recordModel.updateRecord(id, recordData, (err, result) => {
            if (err) {
                console.error('Error updating record:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.send('Record updated successfully');
        });
    } catch (error) {
        console.error('Error in updateCultureCategoryRecord:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function deleteCultureCategoryRecord(req, res) {
    try {
        const { id } = req.params;
        recordModel.deleteRecord(id, (err, result) => {
            if (err) {
                console.error('Error deleting record:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.send('Record deleted successfully');
        });
    } catch (error) {
        console.error('Error in deleteCultureCategoryRecord:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getCultureCategoryRecords,
    createCultureCategoryRecord,
    updateCultureCategoryRecord,
    deleteCultureCategoryRecord
};
