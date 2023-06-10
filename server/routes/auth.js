//it is regarding authentication

const router = require("express").Router();
const User= require('../models/userSchema');
const dotenv = require('dotenv');
const { encrypt, decrypt } = require('../middleware/userAuth');
const { generateToken,validateToken } = require("../middleware/token");


router.post("/signup", async (req, res) => {
    
    
    try {
        const userExists = await User.findOne({ email: req.body.email });
        //console.log(userExists);
        if (userExists == null || !userExists) {
            const hashPassword = await encrypt(req.body.password);
            //console.log(hashPassword);
            const value = await User.find().sort({ _id: -1 }).limit(1);
            //console.log(value);
            let user_id = "06PPD";
            //console.log(value.length);
            if (value.length !== 0) {
                user_id = parseInt(value[0].userId.split("D")[1]) + 1;
            } else {
                user_id = 101;
            }
            // const userName = req.body.email;
            if (req.body.email == "" || req.body.password == "" || req.body.email == null || req.body.password == null) {
                res.status(400).json({    //bad request, missing either email or password
                    message: "Please enter email and password"
                })
            } else {
                let str = req.body.email.split("@")[0];
                let username = str.replace(/[^A-Z]+/gi, "") + user_id;
                const newUser = await User.create({
                    email: req.body.email,
                    password: hashPassword,
                    name: username,
                    userId: "06PPD" + user_id
                })
                // console.log(newUser);
                res.status(201).json({                     //successfully created new user
                    message: "User Successfully Created",
                    data: newUser
                });
            }
        } else {
            res.status(409).json({                          //conflict
                status: "Failed",
                message: "User already exists !"
            });
        }
    }
    catch (err) {
        res.send(err);
    }
});

router.post("/signin", async (req, res) => {
    try {
        if (!req.body.email) {
            res.status(400).json({
              status: "failed",
              message: "Email is required"
            });
            return;
          }
      
          if (!req.body.password) {
            res.status(400).json({
              status: "failed",
              message: "Password is required"
            });
            return;
          }
        const userExists = await User.findOne({ email: req.body.email });
        //console.log(userExists);
        //console.log(userExists.password);
        if (userExists == null || !userExists) {
            res.status(400).json({
                status: "failed",
                message: "User not found!Please give correct email"
            })
        } else {
            let decryptPassword = await decrypt(req.body.password, userExists.password);
            if (decryptPassword) {
                //console.log(decryptPassword);
                const token = await generateToken(req.body.email, process.env.JWT_TOKEN);
               //console.log(token);
                res.status(200).json({
                    status:"Success",
                    token: token,
                    name: userExists.name,
                    email: userExists.email,
                    userId: userExists.userId
                })
            }
            else {
                res.status(400).json({
                    message: "Check Your credentials",
                });
            }
        }
    }
    catch (err) {
        res.status(500).json({
            status: "Failed",
            message: "An error occurred"
        })
    }
}
);
module.exports = router;