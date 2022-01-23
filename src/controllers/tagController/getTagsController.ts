import {Request, Response} from "express";
import tagModel from "../../DB/model/tagModel";
import ApiResponse from "../../global/ApiResponse";

const getTagsController = async (req: Request, res: Response) => {
    try{
        const tags = await tagModel.find()
        return new ApiResponse(200, '', tags, null).send(res)
    }catch (e) {
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}

export default getTagsController