import jwt from 'jsonwebtoken'
import {config as configDotEnv} from "dotenv";
import {resolve} from "path";

configDotEnv({
    path: resolve(__dirname, '../.env')
})

interface userData{
    _id: string,
    fullName: string,
    email: string
}

export const makeAJWT = (data: userData, expireIn: number): string => {
        const token = jwt.sign(data, process.env.JWT_SECRET, {expiresIn:expireIn})
        return token
}


export const decodedJWT = (token: string) => {
    try{
        const data = jwt.verify(token, process.env.JWT_SECRET)
        return  data
    }catch (e) {
        throw 'Token is not valid!'
    }

}