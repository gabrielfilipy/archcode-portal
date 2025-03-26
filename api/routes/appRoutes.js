const express = require('express');
const router = express.Router();
const AppController = require('../v1/controller/AppController');

router.get('/blog', AppController.blog);
router.get('/blog-post', AppController.blogPost);
router.get('/contact', AppController.contact);
router.use(AppController.error);

module.exports = router;
