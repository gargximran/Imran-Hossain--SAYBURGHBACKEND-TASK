import {NextFunction, Request, Response} from "express";
import {decodedJWT} from "../tools/JWT";
import ApiResponse from "./ApiResponse";

interface expectedRequest extends Request{
    user: any
}

const tokenExtractorMiddleware = (key: string) => (req: expectedRequest, res: Response, next: NextFunction) => {
    const token: string = req.headers[key] ? req.headers[key].toString() : '';
    if(!token){
        return new ApiResponse(401, 'Unauthenticated request!', null, null).send(res)
    }else{
        try{
            req.user = decodedJWT(token)
            return next()
        }catch (e){
            return new ApiResponse(401, 'Unauthenticated request!', null, null).send(res)
        }

    }
}

export default tokenExtractorMiddleware