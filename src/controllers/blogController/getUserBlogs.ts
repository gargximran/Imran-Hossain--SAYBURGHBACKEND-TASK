import {Request, Response} from "express";
import blogModel from "../../DB/model/blogModel";
import tagModel from "../../DB/model/tagModel";
import ApiResponse from "../../global/ApiResponse";

interface ExpectedQuery{
    tag?: string,
    offset?: string
}

// @ts-ignore
interface ExpectedRequest extends Request{
    query: ExpectedQuery,
    user: any
}

const getUserBlogsController = async (req: ExpectedRequest, res: Response) => {
    const { tag, offset } = req.query;


    let query:any = {author: req.user._id}
    if(tag){
        try{
            const { _id } = await tagModel.findOne({slug: tag})
            if(_id){
                query.tags = _id
            }

        }catch (e) {
            console.log(e)
        }
    }
    try{


        const blogs = await blogModel.find(query).sort('-createdAt').limit(10).skip(parseInt(offset || '0')).populate([{path: 'author', select: 'fullName email'}, {path: 'tags'}])
        const count = await blogModel.find({author: req.user._id}).count()
        return new ApiResponse(200, '', {blog: blogs, count}, null).send(res)
    }catch (e) {
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}


export default getUserBlogsController