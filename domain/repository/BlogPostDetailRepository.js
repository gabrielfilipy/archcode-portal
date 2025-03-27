const BaseRepository = require('../../domain/repository/BaseRepository');
const BlogPostDetail = require('../model/blogPostDetail');

class BlogPostDetailRepository extends BaseRepository {
    constructor() {
        super(BlogPostDetailRepository);
    }

    async findByBlogPostId(blogPostId) {
        try {
            const postDetail = await this.model.findOne({ where: { blogPostId } });
            return postDetail;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async create(data) {
        try {
            console.log("Data before creating post detail:", data); 
            const newPostDetail = await BlogPostDetail.create({
                postContent: data.postContent,
                blogPostId: data.blogPostId,
                postFoto: data.postFoto
            });
            return newPostDetail;
        } catch (error) {
            throw new Error("Erro ao criar post detail: " + error.message);
        }
    }

}

module.exports = new BlogPostDetailRepository();
