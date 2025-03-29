const express = require('express');
const router = express.Router();

// Gabriel Filipy: Aqui ele renderiza no Index principal.
router.get('/dashboard', (req, res) => {
    res.render("index", { body: "template/dashboard/dashboard", hideLayout: true });
});

router.get('/dashboard/home', (req, res) => {
    res.render("template/dashboard/index", { body: "./home/Home", hideLayout: false });
});

router.get('/dashboard/users', (req, res) => {
    res.render("template/dashboard/index", { body: "./user/UserHome", hideLayout: false });
});

router.get('/dashboard/users/form', (req, res) => {
    res.render("template/dashboard/index", { body: "./user/UserForm", hideLayout: false });
});

router.get('/dashboard/blog/posts', (req, res) => {
    res.render("template/dashboard/index", { body: "./blog/BlogHome", hideLayout: false });
});

router.get('/dashboard/blog/post/form', (req, res) => {
    res.render("template/dashboard/index", { body: "./blog/BlogForm", hideLayout: false });
});

module.exports = router;