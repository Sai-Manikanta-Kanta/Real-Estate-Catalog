// it is start point of server or backend
//it is regarding authentication

const router = require("express").Router();
const User= require('../models/userSchema');
const dotenv = require('dotenv');
const { encrypt, decrypt } = require('../middleware/userAuth');
const { generateToken,validateToken } = require("../middleware/token");

// When a POST request is made to "/signup" endpoint:
router.post("/signup", async (req, res) => {
    
    
    try {
        // It first checks if a user with the given email already exists by querying the User model using User.findOne({ email: req.body.email }).
        const userExists = await User.findOne({ email: req.body.email });
        // If no user is found (userExists == null || !userExists), it proceeds to create a new user.
        if (userExists == null || !userExists) {
            // . The user's password is encrypted using the encrypt middleware.
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
            // If the email or password is missing or null, it sends a 400 response with an error message.
            if (req.body.email == "" || req.body.password == "" || req.body.email == null || req.body.password == null) {
                res.status(400).json({    //bad request, missing either email or password
                    message: "Please enter email and password"
                })
            } else {
                // Otherwise, it generates a username based on the email, removes non-alphabetic characters, and appends the user ID.
                let str = req.body.email.split("@")[0];
                let username = str.replace(/[^A-Z]+/gi, "") + user_id;
                // It creates a new user in the database using the User model's create method, with the email, hashed password, generated username, and user ID.
                const newUser = await User.create({
                    email: req.body.email,
                    password: hashPassword,
                    name: username,
                    userId: "06PPD" + user_id
                })
                // console.log(newUser);
                // Finally, it sends a 201 response with a success message and the created user data.
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
// When a POST request is made to "/signin" endpoint:
router.post("/signin", async (req, res) => {
    try {
        // It checks if the email and password are provided. If any of them is missing, it sends a 400 response with an appropriate error message.
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
        //   It queries the User model to find a user with the given email using User.findOne({ email: req.body.email }).

        const userExists = await User.findOne({ email: req.body.email });
        //console.log(userExists);
        //console.log(userExists.password);
        // . If no user is found, it sends a 400 response with an error message.
        if (userExists == null || !userExists) {
            res.status(400).json({     
                status: "failed",
                message: "User not found!Please give correct email"
            })
        } else {
            // If a user is found, it decrypts the provided password using the decrypt middleware.
            let decryptPassword = await decrypt(req.body.password, userExists.password);
            // If the decrypted password matches the user's password, it generates a token using the generateToken function and the user's email and a JWT secret key from the environment variables.
            if (decryptPassword) {
                //console.log(decryptPassword);
                const token = await generateToken(req.body.email, process.env.JWT_TOKEN);
                // It sends a 200 response with the generated token, the user's name, email, and user ID.
                //  If the password doesn't match, it sends a 400 response with an error message.
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
    // If any error occurs during the execution of the try block, it sends a 500 response with an error message.
    catch (err) {
        res.status(500).json({
            status: "Failed",
            message: "An error occurred"
        })
    }
}
);
module.exports = router;