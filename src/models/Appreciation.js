const db = require('../../db');

function getAppreciation(callback) {
    try {
        db.query('SELECT * FROM appreciation', callback);
    } catch (error) {
        callback(error, null);
    }
}

function createAppreciation(recordData, callback) {
    try {
        db.query('INSERT INTO appreciation SET ?', recordData, callback);
    } catch (error) {
        callback(error, null);
    }
}

function updateAppreciation(id, recordData, callback) {
    if (Object.keys(recordData).length === 0) {
        return callback(new Error('No data provided to update'), null);
    }

    const fields = Object.keys(recordData).map(field => `${field} = ?`).join(', ');
    const values = Object.values(recordData);
    values.push(id);

    const query = `UPDATE appreciation SET ${fields} WHERE id = ?`;

    db.query(query, values, callback);
}

function deleteAppreciation(id, callback) {
    try {
        db.query('DELETE FROM appreciation WHERE id = ?', id, callback);
    } catch (error) {
        callback(error, null);
    }
}

module.exports = {
    getAppreciation,
    createAppreciation,
    updateAppreciation,
    deleteAppreciation
};
