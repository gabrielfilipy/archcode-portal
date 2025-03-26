const BaseService = require('./BaseService');
const BlogPostDetailRepository = require('../repository/BaseRepository');

class BlogPostDetailService extends BaseService {
  constructor() {
    super(BlogPostDetailRepository);
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
