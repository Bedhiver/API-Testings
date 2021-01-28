// var express = require('express');
// var router = express.Router();

const Router = require('express').Router;
const router = new Router();

const userRoute = require('./users');

router.get('/', async (req, res) => {
  res.status(200).json({
    name: 'API',
    version: '1.0',
    status: 200,
    message: 'Bienvenue sur l\'API !'
  });
});

router.use('./users', userRoute);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
