const BlogPostDetailService = require('../../../domain/service/BlogPostDetail');

class BlogPostDetailController {

  async getByBlogPostId(req, res) {
    const { blogPostId } = req.params;
    try {
      const postDetail = await BlogPostDetailService.findByBlogPostId(blogPostId);
      if (postDetail) {
        res.json(postDetail);
      } else {
        res.status(404).json({ message: "Detalhes do post não encontrados" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const newPostDetail = await BlogPostDetailService.create(data);
      res.status(201).json(newPostDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedPostDetail = await BlogPostDetailService.update(id, data);
      res.json(updatedPostDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await BlogPostDetailService.delete(id);
      if (result) {
        res.json({ message: "Detalhes do post deletados com sucesso" });
      } else {
        res.status(404).json({ message: "Detalhes do post não encontrados" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new BlogPostDetailController();
