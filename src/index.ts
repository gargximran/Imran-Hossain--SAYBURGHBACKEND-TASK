import express, {Application} from "express";
import { config as configDotEnv } from "dotenv";
import { resolve } from 'path'
import morgan from 'morgan';
import connect from "./DB/connection";
import UserModel from "./DB/model/userModel";

// import routers
import userRouter from "./routers/userRouters";
import blogRouters from "./routers/blogRouters";


// init dot env
configDotEnv({
    path: resolve(__dirname, '../.env')
})

const app: Application = express();

// init morgan
app.use(morgan('dev'))

app.use(express.json())

const port: Number = parseInt(process.env.PORT || "4000");



// init routers
app.use("/api", userRouter)
app.use('/api', blogRouters)


connect()
    .then(() => {
        console.log('DATABASE CONNECTED TO MONGO_DB!')
        app.listen(port, (): void => {
            console.log(`Application started on port ${port}`);
        });
    })
    .catch(err => {
        console.log(err.message)
    })


