const bcrypt = require('bcryptjs');

//hashing the password (encoding)
const encrypt = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    catch (err) {
        return err;
    }
}

//when the existing user logs in, decoding the password
const decrypt = async (password, hashPassword) => {
    try {
        const result = await bcrypt.compare(password, hashPassword);
        return result;
    }
    catch (err) {
        return err;
    }
}

module.exports = { encrypt, decrypt };