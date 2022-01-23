import {Request, Response} from "express";
import blogModel from "../../DB/model/blogModel";
import ApiResponse from "../../global/ApiResponse";


interface ExpectedBodyType{
    title: string,
    body: string,
    tags: string[]
}
interface ExpectedRequest extends Request{
    body: ExpectedBodyType,
    user: any
}

const updateBlogByAuthorWithSlugController = async (req: ExpectedRequest, res: Response) => {
    const slug = req.params.slug
    try{
        const blog = await blogModel.findOneAndUpdate({slug}, {
            title: req.body.title,
            body: req.body.body,
            tags: req.body.tags
        })

        return new ApiResponse(200, 'Blog updated!', null, null).send(res)
    }catch (e){
        return new ApiResponse(400, e.message, null, null).send(res)
    }

}


export default updateBlogByAuthorWithSlugController