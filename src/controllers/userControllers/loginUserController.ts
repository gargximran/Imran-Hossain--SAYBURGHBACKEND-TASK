import {Request, Response} from "express";
import userModel from "../../DB/model/userModel";
import {makeAJWT} from "../../tools/JWT";
import ApiResponse from "../../global/ApiResponse";

interface expectedBody {
    email: string,
    password: string
}

interface ExpectedRequest extends Request {
    body: expectedBody
}
const loginUserController = async (req: ExpectedRequest, res: Response) => {
    const { body } = req
    try{
        const user = await userModel.getByEmail(body.email)
        if(user.comparePassword(body.password)){
            const payload = {_id: user._id, fullName: user.fullName, email: user.email}
            const accessToken = makeAJWT(payload, (60 * 60))
            const refreshToken = makeAJWT(payload, (60 * 60 * 24 * 365))
            return new ApiResponse(200, 'Login Successful!', {user: payload, accessToken, refreshToken}, null).send(res)
        }else{
            throw 'Email or Password is incorrect!'
        }


    }catch (e) {
        return new ApiResponse(400, 'Email or Password is incorrect!', null, null).send(res)
    }

}


export default loginUserController