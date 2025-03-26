class AppController {

    static blog(req, res) {
        res.render('home', { title: 'Blog' });
    }

    static blogPost(req, res) {
        res.render('blog-post', { title: 'Postagem' });
    } 

    static contact(req, res) {
        res.render('contact', { title: 'Contato' });
    } 

    static error(req, res) {
        res.status(404).render('error', { title: 'Página Não Encontrada' });
    }
    
}

module.exports = AppController;