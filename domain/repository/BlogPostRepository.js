const BaseRepository = require('../../domain/repository/BaseRepository');
const BlogPost = require('../model/blogPost');

class BlogPostRepository extends BaseRepository {
  constructor() {
    super(BlogPost);
  }

  async findByTitle(title) {
    try {
      const post = await this.model.findOne({ where: { blogTitle: title } });
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new BlogPostRepository();
