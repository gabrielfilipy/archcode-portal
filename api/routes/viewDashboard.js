const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render("index", { body: "template/dashboard/dashboard", hideLayout: true });
});

module.exports = router;