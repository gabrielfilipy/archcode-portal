const express = require('express');
const router = express.Router();
const AppController = require('../v1/controller/AppController');

router.get('/home', AppController.home);
router.get('/contact', AppController.about);
router.use(AppController.error);

module.exports = router;
