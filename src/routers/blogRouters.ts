import {Router} from 'express'
import tokenExtractorMiddleware from "../global/tokenExtractorMiddleware";
import createNewBlogController from "../controllers/blogController/createNewBlogController";
import createNewTagBeforeCreateBlogMiddleware from "../middlewares/createNewTagBeforeCreateBlogMiddleware";
import newBlogCreateValidator from "../Validators/blogValidators/newBlogCreateValidator";
import getBlogsController from "../controllers/blogController/getBlogsController";
import getUserBlogsController from "../controllers/blogController/getUserBlogs";

const blogRouters = Router()


blogRouters.post(
    '/blog/create',
    tokenExtractorMiddleware('auth-token'),
    newBlogCreateValidator,
    createNewTagBeforeCreateBlogMiddleware,
    createNewBlogController
)

blogRouters.get('/blog/get', getBlogsController)
// @ts-ignore
blogRouters.get('/blog/user/get', tokenExtractorMiddleware('auth-token'), getUserBlogsController)


export default blogRouters