import express, {Application} from "express";
import { config as configDotEnv } from "dotenv";
import { resolve } from 'path'
import morgan from 'morgan';
import connect from "./DB/connection";

import cl from './h/in'

// init dot env
configDotEnv({
    path: resolve(__dirname, '../.env')
})

const app: Application = express();

// init morgan
app.use(morgan('dev'))

const port: Number = parseInt(process.env.PORT || "4000");


app.get(
    "/",
    cl
);


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


