import {Request, Response, NextFunction} from "express";
import userModel from "../../DB/model/userModel";

import ApiResponse from "../../global/ApiResponse";

interface expectedBody {
    fullName?: string,
    email?: string,
    password?: string
}

interface ExpectedRequest extends Request {
    body: expectedBody
}

interface errorsType {
    email?: string,
    password?: string,
    fullName?: string

}


const signUpValidator = async (req: ExpectedRequest, res: Response, next: NextFunction) => {
    const errors: errorsType = {};

    // fullName validator
    if ('fullName' in req.body) {
        if (req.body.fullName.length > 15) {
            errors.fullName = 'Maximum 15 characters allow!'
        }
        if (req.body.fullName.length < 3) {
            errors.fullName = 'Minimum 3 characters needed!'
        }

    } else {
        errors.fullName = 'Name is required!'
    }

    // email validator
    if ('email' in req.body) {
        const re: RegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        // email format check
        if (!re.test(req.body.email)) {
            errors.email = 'Email format is not correct!'
        } else {
            // email on database check
            try {
                const user = await userModel.emailExistenceCheck(req.body.email)
                if(user){
                    errors.email = "Email already exists!"
                }
            } catch (e) {
                console.log(e)
            }
        }

    } else {
        errors.email = 'Email is required!'
    }


    // password validator
    if('password' in req.body){
        if(req.body.password.length < 8){
            errors.password = 'Minimum 8 character required!'
        }
    }else{
        errors.password = 'Password is required!'
    }


    if(Object.keys(errors).length){
        return new ApiResponse(411, '', {}, errors).send(res)
    }else{
        next()
    }
}

export default signUpValidator