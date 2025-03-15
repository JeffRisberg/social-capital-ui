const express = require('express');
const cors = require('cors');
const {getBots, postBot, deleteBot} = require('../controllers/bots');
const {getDataSources, postDataSource, deleteDataSource} = require('../controllers/dataSources');
const {getTags, postTag, deleteTag} = require('../controllers/tags');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/v1/bots', getBots)
app.post('/v1/bots', postBot)
app.delete('/v1/bots', deleteBot)

app.get('/v1/dataSources', getDataSources)
app.post('/v1/dataSources', postDataSource)
app.delete('/v1/dataSources', deleteDataSource)

app.get('/v1/tags', getTags)
app.post('/v1/tags', postTag)
app.delete('/v1/tags', deleteTag)

module.exports = app;
