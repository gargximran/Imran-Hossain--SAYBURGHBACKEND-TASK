import { Request, Response } from "express";
import blogModel from "../../DB/model/blogModel";
import slugGenerator from "../../tools/slugGenerator";
import ApiResponse from "../../global/ApiResponse";


interface ExpectedBodyType{
    title: string,
    body: string,
    tags: string[]
}

interface ExpectedRequest extends Request{
    user: any,
    body: ExpectedBodyType,
}

const createNewBlogController = async (req: ExpectedRequest, res: Response) => {
    const userId: string = req.user._id;
    try{
        const slug = await slugGenerator(req.body.title, blogModel)
        const blog = await blogModel.create({
            title: req.body.title,
            body: req.body.title,
            author: userId,
            tags: req.body.tags,
            slug: slug
        })

        const p = await blog.populate([{path: 'tags', select: 'name slug'}, {path: 'author', select: 'fullName email'}])

        return new ApiResponse(200, 'New blog created!', p, null).send(res)
    }catch (e){
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}

export default createNewBlogController