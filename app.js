const express = require('express');
const app = express();

//Port Setting
const PORT = process.env.PORT || 5000;
//Router Setting
const appRouter = require("./routers/app-router");
//Router middleware
app.use("api/listing", appRouter);
//MongoDb Database Connection
const dbConnec = require("./db/dbconnection");





const start = async () => {
    try{
        await dbConnec();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`)
        })
    } catch(error){
        console.log(error)
    }
}


start();

