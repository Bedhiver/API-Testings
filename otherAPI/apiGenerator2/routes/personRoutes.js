var express = require('express');
var router = express.Router();
var personController = require('../controllers/personController.js');

/*
 * GET
 */
router.get('/', personController.list);

/*
 * GET
 */
router.get('/:id', personController.show);

/*
 * POST
 */
router.post('/', personController.create);

/*
 * PUT
 */
router.put('/:id', personController.update);

/*
 * DELETE
 */
router.delete('/:id', personController.remove);

module.exports = router;
