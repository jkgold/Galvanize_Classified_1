'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const classifieds = require('./routes/classifieds');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/classifieds', classifieds);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
