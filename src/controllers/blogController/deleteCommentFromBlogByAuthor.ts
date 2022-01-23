import {Request, Response} from "express";
import blogModel from "../../DB/model/blogModel";
import ApiResponse from "../../global/ApiResponse";

const deleteCommentFromBlogByAuthor = async (req: Request, res: Response) => {
    const slug = req.params.slug
    const index = parseInt(req.params.index)
    try{
        const blog = await blogModel.findOne({slug: slug})
        blog.comments = blog.comments.filter((comment, i) => i != index)
        await blog.save()
        return new ApiResponse(200, 'Comment deleted!', null, null).send(res)
    }catch (e){
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}

export default deleteCommentFromBlogByAuthor