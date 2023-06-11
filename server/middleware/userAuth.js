// The bcrypt library is imported, which is used for hashing and comparing passwords in Node.js applications.
const bcrypt = require('bcryptjs');

// The encrypt function is declared. It takes a password parameter and is an asynchronous function (denoted by the async keyword). It is responsible for encrypting (hashing) the password using bcrypt.
const encrypt = async (password) => {
    try {
        // A salt is generated using bcrypt.genSalt() with a cost factor of 10. The salt is used to add randomness to the password hashing process, making it more secure.
        const salt = await bcrypt.genSalt(10);
        // The bcrypt.hash() function is used to generate the hash of the password. It takes the password and salt as parameters. The await keyword is used because the bcrypt.hash() function is asynchronous. The resulting hash is stored in the hash variable.
        const hash = await bcrypt.hash(password, salt);
        // The generated hash is returned from the function.
        return hash;
    }
    // If any error occurs during the execution of the encrypt function (e.g., when generating the salt or hash), the error is caught in the catch block, and the error itself is returned
    catch (err) {
        return err;
    }
}


// The decrypt function is declared. It takes a password and a hashPassword parameter. It is an asynchronous function responsible for comparing the password with a hashed password using bcrypt.
const decrypt = async (password, hashPassword) => {
    try {
        // const result = await bcrypt.compare(password, hashPassword): The bcrypt.compare() function is used to compare the password with the hashPassword. It returns a boolean value indicating whether the passwords match or not. The await keyword is used because the bcrypt.compare() function is asynchronous. The resulting boolean value is stored in the result variable.
        const result = await bcrypt.compare(password, hashPassword);
        return result;
    }
    // If any error occurs during the execution of the decrypt function (e.g., when comparing the passwords), the error is caught in the catch block, and the error itself is returned.
    catch (err) {
        return err;
    }
}
// The module.exports statement is used to export the encrypt and decrypt functions so that they can be used in other parts of the application.
module.exports = { encrypt, decrypt };