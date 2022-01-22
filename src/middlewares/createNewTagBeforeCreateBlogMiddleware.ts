import { Request, Response, NextFunction } from "express";
import tagModel from "../DB/model/tagModel";
import ApiResponse from "../global/ApiResponse";

interface ExpectedBody{
    tags: string[]
}

interface ExpectedRequest extends Request{
    body: ExpectedBody;
}

const createNewTagBeforeCreateBlogMiddleware = async (req: ExpectedRequest, res: Response, next: NextFunction) => {
    const querySet = req.body.tags.map((tag: string ) => ({name: tag}))

    const query = { $or : [...querySet]}
    try{
        let notAvailableTags = [...req.body.tags]
        const existedTags = await tagModel.find(query)
        existedTags.forEach(tag => {
            notAvailableTags = notAvailableTags.filter(t => t != tag.name)
        })

        const createQuery = notAvailableTags.map(t => ({name: t, slug: t.toLowerCase().split(' ').join('-')}))

        const newTags = await tagModel.insertMany(createQuery);

        req.body.tags = [...newTags, ...existedTags].map(t => t._id)
        next()
    }catch (e){
        return new ApiResponse(400, e.message, null, null).send(res)
    }

}

export default createNewTagBeforeCreateBlogMiddleware