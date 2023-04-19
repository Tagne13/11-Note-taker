// Dependencies
const express = require('express');
const apiRouter = express.Router();
const fs = require('fs');
let notes = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// API GET request
apiRouter.get('/api/notes', (req, res) => {
    res.json(notes);
});

// API POST
apiRouter.post('api/notes', (req, res) => {
    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        notes.push(newNote);

        let noteString = JSON.stringify(notes, null, 3);

        fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
            ? console.error(err)
            : console.log('New note has been added!')
        );

        const response = {
            status: 'success',
            body: newNote
        };

        console.log(response);
        res.status(201).json(response);
        res.status(500).json('Error occurred adding note');
    }
});

module.exports = apiRouter;