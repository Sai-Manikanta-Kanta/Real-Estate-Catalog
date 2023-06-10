const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
// The generateToken function takes an email parameter and generates a JWT token based on the provided email. The token is signed using the secret key stored in the JWT_TOKEN environment variable and expires after 24 hours.
const generateToken = (email) => {
    const token = jwt.sign({ email: email, }, process.env.JWT_TOKEN,{
        expiresIn: "24h"
    });

    return token
};
// The validateToken function is a middleware function used to validate JWT tokens in incoming requests. It expects the token to be present in the token header of the request.
const validateToken = (req, res, next) => {
    const token = req.headers.token;
    // If no token is found in the request header, the function returns a 403  response with the message "Please login first".
    if (!token) {
        return res.status(403).json({
            message: "please login first"
        })
    }
    // If a token is found, the function attempts to verify the token using the secret key stored in the JWT_TOKEN environment variable. If the verification succeeds, the decoded payload is stored in the req.user property, and the middleware calls the next() function to proceed to the next middleware in the chain.
    try {
        const decodedJWT = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = decodedJWT;
        next();

    }
    // if the token verification fails (e.g., due to an invalid or expired token), the function returns a 401 Unauthorized response with the message "Invalid token".
    catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
    
}
// The module.exports statement exports the generateToken and validateToken functions to make them accessible to other parts of the application.
module.exports = { generateToken, validateToken };