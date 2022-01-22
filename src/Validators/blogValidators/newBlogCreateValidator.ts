import {Request, Response, NextFunction} from "express";

import ApiResponse from "../../global/ApiResponse";

interface expectedBody {
    title?: string,
    body?: string,
    tags?: string[]
}

interface ExpectedRequest extends Request {
    body: expectedBody
}

interface errorsType {
    title?: string,
    body?: string,
    tags?: string

}

const newBlogCreateValidator = async (req: ExpectedRequest, res: Response, next: NextFunction) => {
    const errors: errorsType = {};

    // title validator
    if ('title' in req.body) {

        if (req.body.title.length > 40){
            errors.title = 'Maximum 40 characters allow!'
        }

        if (req.body.title.length < 2) {
            errors.title = 'Minimum 10 characters needed!'
        }

    } else {
        errors.title = 'Title is required!'
    }




    // body validator
    if('body' in req.body){
        if(req.body.body.length < 25){
            errors.body = 'Minimum 25 character required!'
        }
    }else{
        errors.body = 'Body is required!'
    }

    // tags validator
    if('tags' in req.body){
        if(!Array.isArray(req.body.tags)){
            errors.tags = 'Tag must need to be array!'
        }
    }else{
        errors.tags = 'Tag is required!'
    }


    if(Object.keys(errors).length){
        return new ApiResponse(411, '', {}, errors).send(res)
    }else{
        next()
    }
}

export default newBlogCreateValidator