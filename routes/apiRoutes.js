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

// API POST request
apiRouter.post('api/notes', (req, res) => {

    // Submit title and text
    const {title, text} = req.body;

    // If present, provide unique id
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        // Push new note into notes
        notes.push(newNote);

        // Convert into a string
        let noteString = JSON.stringify(notes, null, 3);

        // Rewrite file to include all notes
        fs.writeFile(`./db/db.json`, noteString, (err) =>
        err
            ? console.error(err)
            : console.log('New note has been added!')
        );

        // Indicate response
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