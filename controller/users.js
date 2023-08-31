const User = require('../models/User');

exports.storeUser = async (req, res) =>{
    const { email, location} =  req.body;
    try {
        const user = new User({
            email,
            location
        });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
exports.getAllUsers = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error.message);
    }
}