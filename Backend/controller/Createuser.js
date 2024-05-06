import Signupmodel from '../models/Signup.js'
import bcrypt from 'bcrypt'
export const Signupcontroller = async(req, res)=>{
    
const {name, password, email}=req.body
    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
const hashpassowrd = bcrypt.hashSync(password, salt);
        const newSignup = new Signupmodel({
            name: name,
            email:email,
            password:hashpassowrd
        });
        await newSignup.save();
        res.status(201).json(newSignup);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}