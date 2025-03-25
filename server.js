const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api/view'));

app.use('/static', express.static(path.join(__dirname, 'api/view')));

app.get('/home', (req, res) => {
    res.render("index", { body: "template/home/home" });
});

app.get('/contact', (req, res) => {
    res.render("index", { body: "template/contact/contact" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
