const db = require('../../db');

function getAllCultureCategoryDetails(callback) {
    try {
        db.query('SELECT * FROM culturecategorydetails', callback);
    } catch (error) {
        callback(error, null);
    }
}

function getCultureCategoryDetails(category, callback) {
    try {
        db.query('SELECT * FROM culturecategorydetails WHERE category = ?', category, callback);
    } catch (error) {
        callback(error, null);
    }
}

function createCultureCategoryDetails(recordData, callback) {
    try {
        db.query('INSERT INTO culturecategorydetails SET ?', recordData, callback);
    } catch (error) {
        callback(error, null);
    }
}

function updateCultureCategoryDetails(id, recordData, callback) {
    if (Object.keys(recordData).length === 0) {
        return callback(new Error('No data provided to update'), null);
    }

    const query = 'UPDATE culturecategorydetails SET ? WHERE id = ?';
    db.query(query, [recordData, id], callback);
}

function deleteCultureCategoryDetails(id, callback) {
    try {
        db.query('DELETE FROM culturecategorydetails WHERE id = ?', id, callback);
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    getCultureCategoryDetails,
    createCultureCategoryDetails,
    updateCultureCategoryDetails,
    deleteCultureCategoryDetails,
    getAllCultureCategoryDetails 
};
