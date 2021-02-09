var MovieModel = require('../models/movieModel.js');

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-rest-utils");

/**
 * Create a new movie
 * @route POST /movie
 * @group movie - Operations about movie
 * @param {string} name.body
* @param {number} date.body
 * @returns {object} 200 - An array of Movies
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
    mongoose_utils.post(req, res, MovieModel);
});

/**
 * Modify movie
 * @route PUT /movie
 * @group movie - Operations about movie
 * @param {string} name.body
* @param {number} date.body
 * @returns {object} 200 - The newly modified movie
 * @returns {Error}  default - Unexpected error
 */

router.put("/", function (req, res) {
    mongoose_utils.put(req, res, MovieModel);
});



/**
 * Get all Movies
 * @route GET /movie
 * @group movie - Operations about movie
 * @param {string} _id.query - (optional) get by _id
* @param {string} name.query - (optional) get by name
* @param {number} date.query - (optional) get by date
 * @returns {object} 200 - An array of Movies
 * @returns {Error}  default - Unexpected error
 */


router.get("/", async function (req, res) {
    await mongoose_utils.get(req, res, MovieModel);
});

/**
 * Delete a movie
 * @route DELETE /movie/:id
 * @group movie - Operations about movie
 * @param {string} id.query.required
 * @returns {object} 200 - An array of Movies
 * @returns {Error}  default - Unexpected error
 */


router.delete("/:id", function (req, res) {
    mongoose_utils.delete(req, res, MovieModel);
});

module.exports = router;