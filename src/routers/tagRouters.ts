import { Router } from "express";
import getTagsController from "../controllers/tagController/getTagsController";

const tagRouters = Router()

tagRouters.get('/tag/get', getTagsController)


export default tagRouters