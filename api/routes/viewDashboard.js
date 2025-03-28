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

module.exports = router;