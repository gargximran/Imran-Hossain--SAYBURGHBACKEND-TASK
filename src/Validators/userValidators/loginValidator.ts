import {Request, Response, NextFunction} from "express";

import ApiResponse from "../../global/ApiResponse";

interface expectedBody {
    email?: string,
    password?: string
}

interface ExpectedRequest extends Request {
    body: expectedBody
}

interface errorsType {
    email?: string,
    password?: string

}


const loginValidator = async (req: ExpectedRequest, res: Response, next: NextFunction) => {
    const errors: errorsType = {};

    // email validator
    if ('email' in req.body) {
        const re: RegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        // email format check
        if (!re.test(req.body.email)) {
            errors.email = 'Email format is not correct!'
        }

    } else {
        errors.email = 'Email is required!'
    }


    // password validator
    if('password' in req.body){

    }else{
        errors.password = 'Password is required!'
    }


    if(Object.keys(errors).length){
        return new ApiResponse(422, '', {}, errors).send(res)
    }else{
        next()
    }
}

export default loginValidator