const express = require('express');
const jwt = require('jsonwebtoken');
const { connectToDatabase, sql } = require('../db');
const router = express.Router();
require('dotenv').config();


module.exports = router;
