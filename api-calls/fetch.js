const axios = require('axios');
const Weather = require('../models/Weather');
const User = require('../models/User');

exports.fetchData = async ()=> {
    const date = new Date();
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    try {
        const users = await User.find();
        users.map(async (u) =>{
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${u.location.lat}&lon=${u.location.lon}&appid=${process.env.API_KEY}&units=metric`);
                const weather = new Weather({
                    user: u._id,
                    date: day,
                    time: time,
                    details: res.data.main
                });
                await weather.save();
            } catch (error) {
                console.error(error.message);
            }
        });
    } catch (error) {
        console.error(error.message);
    }
}