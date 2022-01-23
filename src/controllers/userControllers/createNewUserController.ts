import {Response, Request} from "express";
import userModel from "../../DB/model/userModel";
import {makeAJWT} from "../../tools/JWT";
import ApiResponse from "../../global/ApiResponse";


interface expectedBody {
    fullName: string,
    email: string,
    password: string
}

interface ExpectedRequest extends Request {
    body: expectedBody
}

const createNewUserController = async (req: ExpectedRequest, res: Response) => {
    try {
        const user = await userModel.createOne({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        })


        const payload = {_id: user._id, email: user.email, fullName: user.fullName}
        const accessToken = makeAJWT(payload, (60 * 60))
        const refreshToken = makeAJWT(payload, (60 * 60 * 24 * 365))


        return new ApiResponse(201, 'Signed Up successfully!', {user: payload, accessToken, refreshToken}, null).send(res)


    } catch (e) {
        return new ApiResponse(400, e.message, null, null).send(res)
    }
}

export default createNewUserController