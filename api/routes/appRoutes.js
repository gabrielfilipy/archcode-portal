const express = require('express');
const router = express.Router();
const BlogPostController = require('../v1/controller/BlogPostController');
const BlogPostDetailController = require('../v1/controller/BlogPostDetailController');
const UserController = require('../v1/controller/UserController');
const AppController = require('../v1/controller/AppController');

// PAGES
router.get('/blog', AppController.blog);
router.get('/blog-post', AppController.blogPost);
router.get('/contact', AppController.contact);
router.use(AppController.error);

// BLOG
router.get('/blog-posts', BlogPostController.getAll);
router.get('/blog-posts/:id', BlogPostController.getById);
router.post('/blog-posts', BlogPostController.create);
router.get('/blog-posts/title/:title', BlogPostController.findByTitle);
router.put('/blog-posts/:id', BlogPostController.update);
router.delete('/blog-posts/:id', BlogPostController.delete);

// BLOG DETAIL
router.get('/blog-post-details/:blogPostId', BlogPostDetailController.getByBlogPostId);
router.post('/blog-post-details', BlogPostDetailController.create);
router.put('/blog-post-details/:id', BlogPostDetailController.update);
router.delete('/blog-post-details/:id', BlogPostDetailController.delete);

// USER
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getById);
router.post('/users', UserController.create);
router.get('/users/login/:login', UserController.findByLogin);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;
