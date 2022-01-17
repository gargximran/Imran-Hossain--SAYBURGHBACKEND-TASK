import { Response, Request } from "express";


const cl = (req: Request, res: Response) => {
    res.send('Hello world!')
}


export default cl