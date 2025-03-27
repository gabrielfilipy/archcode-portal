const BlogPostService = require('../../../domain/service/BlogPostService');

class BlogPostController {
    async getAll(req, res) {
        try {
            const posts = await BlogPostService.findAll();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const post = await BlogPostService.findById(id);
            res.json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        const data = req.body;
        console.log('Received data:', data);

        if (!data || !data.postTitle || !data.content || !data.userId) {
            return res.status(400).json({ message: 'Title, content, and userId are required' });
        }

        if (!data.date) {
            data.date = new Date();
        }

        try {
            const newPost = await BlogPostService.create(data);
            return res.json(newPost);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }

    async findByTitle(req, res) {
        const { title } = req.params;
        try {
            const post = await BlogPostService.findByTitle(title);
            res.json(post);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedPost = await BlogPostService.update(id, data);
            res.json(updatedPost);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const result = await BlogPostService.delete(id);
            if (result) {
                res.json({ message: "Post deletado com sucesso" });
            } else {
                res.status(404).json({ message: "Post não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new BlogPostController();
