#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000

'use strict';

const mongoose = require('mongoose');
const MONGOOSE_URL = 'mongodb://localhost:27017/notesDB';

mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let objNote = new Input();

let newNote = new Notes(objNote);
newNote.execute(objNote);
// newNote.add(objNote);



