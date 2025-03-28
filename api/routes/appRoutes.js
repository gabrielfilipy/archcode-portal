const express = require('express');
const router = express.Router();
const BlogPostController = require('../v1/controller/BlogPostController');
const BlogPostDetailController = require('../v1/controller/BlogPostDetailController');
const UserController = require('../v1/controller/UserController');

// BLOG
router.get('/api/blog-posts', BlogPostController.getAll);
router.get('/api/blog-posts/:id', BlogPostController.getById);
router.post('api//blog-posts', BlogPostController.create);
router.get('/api/blog-posts/title/:title', BlogPostController.findByTitle);
router.put('/api/blog-posts/:id', BlogPostController.update);
router.delete('/blog-posts/:id', BlogPostController.delete);

// BLOG DETAIL
router.get('/api/blog-post-details/:blogPostId', BlogPostDetailController.getByBlogPostId);
router.post('/api/blog-post-details', BlogPostDetailController.create);
router.put('/api/blog-post-details/:id', BlogPostDetailController.update);
router.delete('/api/blog-post-details/:id', BlogPostDetailController.delete);

// USER
router.get('/api/users', UserController.getAll);
router.get('/api/users/:id', UserController.getById);
router.post('/api/users', UserController.create);
router.get('/api/users/login/:login', UserController.findByLogin);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);

module.exports = router;
