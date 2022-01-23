import {Request, Response} from "express";
import blogModel from "../../DB/model/blogModel";
import ApiResponse from "../../global/ApiResponse";


interface ExpectedBody{
    comment: string
}

interface ExpectedRequest extends Request{
    body: ExpectedBody,
    user: any
}

const addCommentToABlog = async (req: ExpectedRequest, res: Response) => {
    const slug = req.params.slug
    try{
        const blog = await blogModel.findOne({slug})
        blog.comments.push({commenter: req.user._id, comment: req.body.comment, createdAt: new Date()})
        await blog.save()
        return new ApiResponse(200, 'Comment Added', null, null).send(res)
    }catch (e){
        return new ApiResponse(400, e.message, null, null).send(res)
    }

}


export default addCommentToABlog