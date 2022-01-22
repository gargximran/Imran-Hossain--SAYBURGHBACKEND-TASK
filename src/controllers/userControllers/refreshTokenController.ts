import {Request, Response} from "express";
import {makeAJWT} from "../../tools/JWT";
import ApiResponse from "../../global/ApiResponse";

interface IUserPayload {
    _id: string,
    email: string,
    fullName: string
}

interface ExpectedRequest extends Request{
    user: IUserPayload
}

const refreshTokenController = (req: ExpectedRequest, res: Response) => {
    try{
        const user = req.user;
        const payload: IUserPayload = {_id: user._id, fullName: user.fullName, email: user.email}

        const accessToken = makeAJWT(payload, (60 * 60))
        return new ApiResponse(200, 'New Access Token Created!', {accessToken}, null).send(res)
    }catch (e){
        return new ApiResponse(400, 'Something went wrong!', null, null).send(res)
    }
}

export default refreshTokenController