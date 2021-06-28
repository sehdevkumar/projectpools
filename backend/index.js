import express from 'express';
import Auth from './Routers/Auth/Auth.js';
import cors from 'cors';
import dotenv from 'dotenv';
import mongooseDB from './DB/DBConfig.js';
dotenv.config({path:'Config.env'});


const app = express(); 
mongooseDB();
app.use(cors());
app.use(express.json());
app.use(Auth);




const PORT = process.env.PORT||5000

app.listen(PORT,()=>{
    console.log(`Server is Running On PORT ${PORT}`)
})