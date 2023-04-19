// Dependencies
const path = require('path');
const express = require('express');
const htmlRouter = express.Router();

// HTML GET requests

    // GET * to return the index.html file
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

    // GET /notes to return the notes.html file
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Export
module.exports = htmlRouter;