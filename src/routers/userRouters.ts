import {Router} from "express";

import createNewUserController from "../controllers/userControllers/createNewUserController";
import signUpValidator from "../Validators/userValidators/signUpValidator";
import loginValidator from "../Validators/userValidators/loginValidator";
import loginUserController from "../controllers/userControllers/loginUserController";
import tokenExtractorMiddleware from "../global/tokenExtractorMiddleware";
import refreshTokenController from "../controllers/userControllers/refreshTokenController";


const userRouter = Router()


userRouter.post("/auth/signup", signUpValidator, createNewUserController)
userRouter.post('/auth/login', loginValidator, loginUserController)
userRouter.post('/auth/verify', tokenExtractorMiddleware('auth-token'), (req, res) => {
    // @ts-ignore
    res.send(req.user)
})
userRouter.post('/auth/refresh', tokenExtractorMiddleware('refresh-token'), refreshTokenController)


export default userRouter

