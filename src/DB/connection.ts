import Mongoose from 'mongoose'
import { config as configDotEnv } from "dotenv";
import { resolve } from "path";

configDotEnv({
    path: resolve(__dirname, '../../.env')
})


const db_uri: any = process.env.MONGO_DB_URI



function connect(): Promise<typeof Mongoose> {
    return Mongoose.connect(db_uri)

}

export default connect