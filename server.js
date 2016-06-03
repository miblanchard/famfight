'use strict'
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const request = require('request');

app.use(express.static(__dirname + '/client'));

app.listen(3000);