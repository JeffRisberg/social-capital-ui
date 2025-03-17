const express = require('express');
const cors = require('cors');
const {getStudents, postStudent, deleteStudent} = require('../controllers/students');
const {getTags, postTag, deleteTag} = require('../controllers/tags');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/v1/students', getStudents)
app.post('/v1/students', postStudent)
app.delete('/v1/students', deleteStudent)

app.get('/v1/tags', getTags)
app.post('/v1/tags', postTag)
app.delete('/v1/tags', deleteTag)

module.exports = app;
