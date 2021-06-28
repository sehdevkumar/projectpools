import express from "express";
import User from '../../Models/Usermodel.js'
import bcrypt from 'bcryptjs'
import jsonwebtoken from "jsonwebtoken";

const Auth = express.Router();


Auth.post('/api/createuser',async (req,res)=>{
    const {name,email,password} = req.body
      try {

            const exists = await User.findOne({email})
            if(exists){
                return res.status(409).json({error:"User Have Already Account"})
            }

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password,salt)

            const user = await User.create({
                name,
                email,
                password:hashPassword
            })
             
            if(!user){
                 return res
                   .status(400)
                   .json({ error: "User Not Created" });
             }
              
             const token = await jsonwebtoken.sign({userid:{
                 id:user._id
             }},process.env.SECRETKEY,{
                 expiresIn:'7d'
             })

              res
               .status(200)
               .json({user:{name:user.name,token:token}});



      } catch (error) {
           return res.status(500).json({ error: "Server Or Internal Error!" });
      }
})


export default Auth
