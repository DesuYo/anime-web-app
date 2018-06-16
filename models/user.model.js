const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.protectPassword = async () => {
    const saltRounds = 10;
    try {
        await bcrypt.hash(password, saltRounds);
    }
    catch(err) {
        throw new Error(err);
    }
};

module.exports = mongoose.model('User', userSchema);