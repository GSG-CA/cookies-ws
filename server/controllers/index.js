const express = require("express");

const error = require("./error");

const router = express.Router();

// write your code


router.use(error.client );

module.exports = router;
