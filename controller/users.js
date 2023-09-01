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
        switch(error.code){
            case 11000:
                return res.status(400).json("Email Already taken"); 
        }
        res.status(400).json(error.message);
    }
}
exports.updateUser = async (req, res) =>{
    const location =  req.body.location;
    const id = req.query.id;
    try {
        const user = await User.findByIdAndUpdate(id, {
            location
        });
        user.location = location;
        res.status(200).json(user);
    } catch (error) {
        switch(error.name){
            case "CastError":
                return res.status(400).json("User not Found");
        }
        res.status(400).json(error.message);
    }
}
