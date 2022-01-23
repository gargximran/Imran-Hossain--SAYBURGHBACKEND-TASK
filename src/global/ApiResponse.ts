import {Response} from "express";

class ApiResponse{
    private status_code: number;
    private message: string;
    private data: object | null;
    private errors: object | null;
    constructor(status_code = 200, message: string, data: object | null, errors: object | null) {
        this.status_code = status_code
        this.message = message
        this.data = data || null
        this.errors = errors || null

        return this
    }

    public send(response: Response){
        const res: any = {
            status_code: this.status_code,
            message: this.message
        }
        if(this.data){
            if(Object.keys(this.data).length){
                res.data = this.data
            }
        }

        if(this.errors){
            if(Object.keys(this.errors).length){
                res.errors = this.errors
            }

        }

        return response
            .status(this.status_code)
            .send(res)
    }
}


export default ApiResponse