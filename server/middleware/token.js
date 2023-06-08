const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const generateToken = (email) => {
    const token = jwt.sign({ email: email, }, process.env.JWT_TOKEN,{
        expiresIn: "24h"
    });

    return token
};
const validateToken = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(403).json({
            message: "please login first"
        })
    }
    try {
        const decodedJWT = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = decodedJWT;
        next();

    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
    
}
module.exports = { generateToken, validateToken };