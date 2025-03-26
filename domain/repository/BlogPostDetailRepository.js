const BaseRepository = require('../../domain/repository/BaseRepository');
const BlogPostDetail = require('../model/blogPostDetail');

class BlogPostDetailRepository extends BaseRepository {
  constructor() {
    super(BlogPostDetail);
  }

  async findByBlogPostId(blogPostId) {
    try {
      const postDetail = await this.model.findOne({ where: { blogPostId } });
      return postDetail;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new BlogPostDetailRepository();
