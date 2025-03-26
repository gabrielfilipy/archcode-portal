const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api/view'));

app.use('/static', express.static(path.join(__dirname, 'api/view')));

app.get('/home', (req, res) => {
    res.render("index", { body: "template/blog/blog" });
});

app.get('/contact', (req, res) => {
    res.render("index", { body: "template/contact/contact" });
});

app.get('/blog-post/:id', (req, res) => {
    res.render("index", { 
        body: "template/blog/blog-post/blog-post",
        postId: req.params.id
    });
});

app.get('/api/blog-post/:id', (req, res) => {
    const posts = {
        1: { title: "Meu Primeiro Post", author: "João Silva", description: "Descrição do post 12" },
        10: { title: "Aprendendo Node.js", author: "Maria Souza", description: "Descrição do post 15" }
    };

    const post = posts[req.params.id] || { title: "Post não encontrado", author: "Desconhecido", image: "", description: "Nenhuma descrição disponível" };
    
    res.json(post);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
