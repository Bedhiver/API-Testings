var MusicModel = require('./musicModel.js');

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-rest-utils");

/**
 * Create a new music
 * @route POST /music
 * @group music - Operations about music
 * @param {string} name.body
* @param {number} date.body
 * @returns {object} 200 - An array of Musics
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
    mongoose_utils.post(req, res, MusicModel);
});

/**
 * Modify music
 * @route PUT /music
 * @group music - Operations about music
 * @param {string} name.body
* @param {number} date.body
 * @returns {object} 200 - The newly modified music
 * @returns {Error}  default - Unexpected error
 */

router.put("/", function (req, res) {
    mongoose_utils.put(req, res, MusicModel);
});



/**
 * Get all Musics
 * @route GET /music
 * @group music - Operations about music
 * @param {string} _id.query - (optional) get by _id
* @param {string} name.query - (optional) get by name
* @param {number} date.query - (optional) get by date
 * @returns {object} 200 - An array of Musics
 * @returns {Error}  default - Unexpected error
 */


router.get("/", function (req, res) {
    mongoose_utils.get(req, res, MusicModel);
});

/**
 * Delete a music
 * @route DELETE /music/:id
 * @group music - Operations about music
 * @param {string} id.query.required
 * @returns {object} 200 - An array of Musics
 * @returns {Error}  default - Unexpected error
 */


router.delete("/:id", function (req, res) {
    mongoose_utils.delete(req, res, MusicModel);
});

module.exports = router;