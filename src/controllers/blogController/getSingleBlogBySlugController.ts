import {Request, Response} from "express";
import blogModel from "../../DB/model/blogModel";
import ApiResponse from "../../global/ApiResponse";

const getSingleBlogBySlugController = async (req: Request, res: Response) => {
    const slug = req.params.slug;
    try{
        const blog = await blogModel.findOne({slug}).populate([{path: 'author', select: 'fullName email'}, {path: 'tags'}, {path: 'comments.commenter', select: 'fullName'}])
        return new ApiResponse(200, '', {blog: blog}, null).send(res)
    }catch (e) {
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}


export default getSingleBlogBySlugController