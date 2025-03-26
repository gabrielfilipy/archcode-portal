const express = require('express');
const router = express.Router();

router.get('/bloga', (req, res) => {
    res.render("index", { body: "template/blog/blog" });
}); 

router.get('/contact', (req, res) => {
    res.render("index", { body: "template/contact/contact" });
});

router.get('/blog-post/:id', (req, res) => {
    res.render("index", { 
        body: "template/blog/blog-post/blog-post",
        postId: req.params.id
    });
});

module.exports = router;
