import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


//controller for creating user
const signup = async (req, res) => {  
    try {
      const {fullName, email, password} = req.body;
      const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({message:"User already exists"});
        }

        const newUser = new User({fullName, email, password});
        await newUser.save();
        res.status(201).json({ message: 'User signed up successfully!' });
    } catch (error) {
        res.status(500).json({message: 'server error' , error: err.message });
    }
} 

//controller for logging in user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({message:"User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return res.cookie('jwt_token', token, {
            httpOnly: true,
            secure: true, 
            sameSite: 'none', 
            maxAge: 24 * 60 * 60 * 1000,
          }).json({ message: 'Login successful',user: user.fullName, useremail: user.email });
        } 
    catch (err) {
          res.status(500).json({ error: err.message });
        }
};


//controller for logging out user
const logout = (req, res) => {
    res.clearCookie('jwt_token', { httpOnly: true, secure: true, sameSite: 'none' }).json({ message: 'Logged out successfully' });
};

export { signup, login, logout };