class AppController {

    static home(req, res) {
        res.render('home', { title: 'Home' });
    }

    static about(req, res) {
        res.render('contact', { title: 'Contact' });
    } 

    static error(req, res) {
        res.status(404).render('error', { title: 'Página Não Encontrada' });
    }
    
}

module.exports = AppController;