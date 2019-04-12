const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

require('dotenv').config();

// Start app
const app = express();
app.use(express.json());
app.use(cors());

const { API_PORT, DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// Start DB
// mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?authSource=admin`, {useNewUrlParser: true});
mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {useNewUrlParser: true});
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(API_PORT);
