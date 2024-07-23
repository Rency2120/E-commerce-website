const express = require('express');
const UserDetail = require("../model/Employee")

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { fullname, email, password, address, pincode, phonenumber } = req.body;
        const existingRegister = await UserDetail.findOne({ email });
        if (existingRegister) {
            return res.status(200).json({ message: "User already exist" })
        }
        const newUser = new UserDetail({
            fullname, email, password, address, pincode, phonenumber
        })

        await newUser.save();

        res.status(200).json({
            message: "Available data",
            newUser: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
                password: newUser.password,
                address: newUser.address,
                pincode: newUser.pincode,
                phonenumber: newUser.phonenumber,

            }
        })

    } catch (err) {
        res.status(400).json({ message: "Error in Creating Account" });
        console.log("Error", err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password, } = req.body;
        const user = await UserDetail.findOne({ email });
        if (user) {
            if (password === user.password) {
                return res.status(200).json({ message: 'Login Successful', user });
            } else {
                return res.status(400).json({ message: "Password didn't match" });
            }
        } else {
            return res.status(404).json({ message: 'User not registered' });
        }

    } catch (err) {
        res.status(400).json({ message: "Error in Login" });
        console.log("Error", err);
    }
});
module.exports = router