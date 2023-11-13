import mongoose from "mongoose";

const CreateBlogsSchema = new mongoose.Schema(
    {   
        blog_title: {
            type: String,
            required: true
        },
        blog_description: {
            type: String,
            required: true
        },
        blog_content: {
            type: String,
            required: true
        },
        author_name: {
            type: String,
            required: true
        },
        blog_image: {
            type: String,
            required: true
        },
        blog_video: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        },
        deleted_at: {
            type: Date,
            default: null
        }
    }
    )

const CreateBlogs = mongoose.models.smartBlogs || mongoose.model('smartBlogs', CreateBlogsSchema)

export default  CreateBlogs;