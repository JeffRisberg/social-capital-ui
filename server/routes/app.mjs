import express from "express";
import cors from "cors";
import {getStudents, postStudent, deleteStudent} from "../controllers/students.mjs";
import {getSurveys} from "../controllers/surveys.mjs";
import {getTags, postTag, deleteTag} from "../controllers/tags.mjs";


export const app = express();

app.use(cors());
app.use(express.json());

app.get('/v1/students', getStudents)
app.post('/v1/students', postStudent)
app.delete('/v1/students', deleteStudent)

app.get('/v1/surveys', getSurveys)

app.get('/v1/tags', getTags)
app.post('/v1/tags', postTag)
app.delete('/v1/tags', deleteTag)

