const nodemailer = require('nodemailer');
const User = require('../models/User');
const Weather = require('../models/Weather');

const transpoter = nodemailer.createTransport({
    service: "gmail",
    user: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "login",
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

// Email Send for specific email addresss
const send = async (email, report)=>{
    try {
        const info = await transpoter.sendMail( {
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: "Weather Report",
            text: report
        });
        console.log("messagee send:", info.messageId);
    } catch (error) {
        console.log(error.message);
    }
}

// Get all Weather details  for specific user and returr tha readable Email Body text
const getWeatherData = async  (userId) =>{
    try {
        const data = await Weather.find({user: userId}).sort({_id: -1}).limit(3);
        let report = "There is your past hourly Weather details";
        if(data){
            data.map(d =>{
                report += ` \n
                            Date : ${d.date}
                            Time : ${d.time}
                            temprature: ${d.details.temp}
                            pressure: ${d.details.pressure}
                            humidity: ${d.details.humidity}
                            sea_level: ${d.details.sea_level}
                            grnd_level: ${d.details.grnd_level}`
                return report;
            });
        }
        return report;
    } catch (error) {
        console.error(error);
    }
}

// Main Sender
exports.sendMail = async () =>{
    try {
        const users = await User.find();
        users.map(async (u)=> {
            const userReport = await getWeatherData(u._id);
            return send(u.email, userReport);
        });
    } catch (error) {
        console.error(error.message);
    } 
}