var express = require('express');
var router = express.Router();

const service = require('../controllers/user');

router.get('/', service.get);

router.get('/:id', service.getById);

router.put('/add', service.add);

router.patch('/update', service.update);

router.delete('/delete', service.delete);

router.delete('/deleteAll', service.deleteAll);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
