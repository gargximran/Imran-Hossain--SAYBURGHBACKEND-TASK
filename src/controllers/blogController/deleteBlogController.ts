import {Request, Response} from "express";
import blogModel from "../../DB/model/blogModel";
import ApiResponse from "../../global/ApiResponse";


const deleteBlogController = async (req: Request, res: Response) => {
    const id = req.params.id
    try{
        await blogModel.deleteOne({_id: id})
        return new ApiResponse(200, 'Blog deleted!', null, null).send(res)
    }catch (e){
        return new ApiResponse(400, e.message, null, null).send(res)
    }

}


export default deleteBlogController