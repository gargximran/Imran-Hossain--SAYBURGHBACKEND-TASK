import {NextFunction, Request, Response} from "express";
import blogModel from "../DB/model/blogModel";
import ApiResponse from "../global/ApiResponse";


const checkBlogOwnerBeforeDeleteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    console.log(id, 'I am here on top')
    try{
        const blog = await blogModel.findOne({_id: id})
        console.log(blog)
        // @ts-ignore
        if(blog?.author?._id == req.user._id){
            next()
        }else{
            return new ApiResponse(401, 'No permission!', null, null).send(res)
        }
    }catch (e) {
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}

export default checkBlogOwnerBeforeDeleteMiddleware