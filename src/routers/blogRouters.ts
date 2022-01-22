import {Router} from 'express'
import tokenExtractorMiddleware from "../global/tokenExtractorMiddleware";
import createNewBlogController from "../controllers/blogController/createNewBlogController";
import createNewTagBeforeCreateBlogMiddleware from "../middlewares/createNewTagBeforeCreateBlogMiddleware";
import newBlogCreateValidator from "../Validators/blogValidators/newBlogCreateValidator";

const blogRouters = Router()


blogRouters.post(
    '/blog/create',
    tokenExtractorMiddleware('auth-token'),
    newBlogCreateValidator,
    createNewTagBeforeCreateBlogMiddleware,
    createNewBlogController
)


export default blogRouters