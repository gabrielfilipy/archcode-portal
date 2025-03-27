const BaseService = require('./BaseService');
const BlogPostDetailRepository = require('../repository/BlogPostDetailRepository'); // Corrigido para BlogPostDetailRepository

class BlogPostDetailService extends BaseService {
  constructor() {
    super(BlogPostDetailRepository); // Agora utiliza o repositório correto
  }

  async findByBlogPostId(blogPostId) {
    try {
      const postDetail = await this.repository.findByBlogPostId(blogPostId);
      return postDetail;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new BlogPostDetailService();
