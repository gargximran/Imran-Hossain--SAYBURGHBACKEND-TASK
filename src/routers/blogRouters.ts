import {Router} from 'express'
import tokenExtractorMiddleware from "../global/tokenExtractorMiddleware";
import createNewBlogController from "../controllers/blogController/createNewBlogController";
import createNewTagBeforeCreateBlogMiddleware from "../middlewares/createNewTagBeforeCreateBlogMiddleware";
import newBlogCreateValidator from "../Validators/blogValidators/newBlogCreateValidator";
import getBlogsController from "../controllers/blogController/getBlogsController";
import getUserBlogsController from "../controllers/blogController/getUserBlogs";
import deleteBlogController from "../controllers/blogController/deleteBlogController";
import checkBlogOwnerBeforeDeleteMiddleware from "../middlewares/checkBlogOwnerBeforeDeleteMIddleware";
import getSingleBlogBySlugController from "../controllers/blogController/getSingleBlogBySlugController";
import addCommentToABlog from "../controllers/blogController/addCommentToABlog";
import deleteCommentFromBlogByAuthor from "../controllers/blogController/deleteCommentFromBlogByAuthor";
import checkBlogOwnerBeforeDeleteCommentMiddleware from "../middlewares/checkBlogOwnerBeforeDeleteComment";
import updateBlogByAuthorWithSlugController from "../controllers/blogController/updateBlogByAuthorWithSlugController";

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

blogRouters.post('/blog/delete/:id',tokenExtractorMiddleware('auth-token'), checkBlogOwnerBeforeDeleteMiddleware, deleteBlogController)

blogRouters.get('/blog/single/:slug', getSingleBlogBySlugController)
blogRouters.post('/blog/comment/:slug', tokenExtractorMiddleware('auth-token'), addCommentToABlog)
blogRouters.get('/blog/comment/:slug/:index', tokenExtractorMiddleware('auth-token'), checkBlogOwnerBeforeDeleteCommentMiddleware, deleteCommentFromBlogByAuthor)
blogRouters.post('/blog/update/:slug', tokenExtractorMiddleware('auth-token'), checkBlogOwnerBeforeDeleteCommentMiddleware, newBlogCreateValidator, createNewTagBeforeCreateBlogMiddleware, updateBlogByAuthorWithSlugController)


export default blogRouters