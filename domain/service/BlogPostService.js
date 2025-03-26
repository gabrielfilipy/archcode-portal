const BaseService = require('./BaseService');
const BlogPostRepository = require('../repository/BlogPostRepository');

class BlogPostService extends BaseService {
  constructor() {
    super(BlogPostRepository);
  }

  async findByTitle(title) {
    try {
      const post = await this.repository.findByTitle(title);
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

module.exports = new BlogPostService();
