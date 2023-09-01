const Weather = require('../models/Weather');

exports.getWeatherById = async (req, res) =>{
    try {
        const data = await Weather.find({user: req.params.id, date: req.query.date});
        res.status(200).json(data);
    } catch (error) {
        switch(error.name){
            case "CastError":
                return res.status(400).json("User not Found");
        }
        res.status(400).json(error.message);
    }
}
