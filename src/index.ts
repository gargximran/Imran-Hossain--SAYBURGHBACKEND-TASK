import express, {Application} from "express";
import { config as configDotEnv } from "dotenv";
import { resolve } from 'path'
import morgan from 'morgan';
import connect from "./DB/connection";

// import routers
import userRouter from "./routers/userRouters";
import blogRouters from "./routers/blogRouters";
import tagRouters from "./routers/tagRouters";


// init dot env
configDotEnv({
    path: resolve(__dirname, '../.env')
})

const app: Application = express();

// init morgan
app.use(morgan('dev'))

app.use(express.json())
app.use(express.static(resolve(__dirname, '../frontend/build')));

const port: Number = 5000;



// init routers
app.use("/api", userRouter)
app.use('/api', blogRouters)
app.use('/api', tagRouters)

app.get(`*`, (req, res) => {
    res.sendFile(resolve(__dirname, "../frontend/build/index.html"));
});

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


