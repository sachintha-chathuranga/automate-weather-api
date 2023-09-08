const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cron = require('node-cron');
const app = express();
const cors = require('cors');

const usersRout = require('./router/users');
const weatherRout = require('./router/weather');
const {fetchData} = require('./api-calls/fetch');
const {sendMail} = require('./mailer/mail');

// list of host that allow to make a connection with this api
const whitelist = ['https://mmsc-chatapp.netlify.app', 'http://localhost:3000', '*'];

// define cor options for secure Api routes
const corsOptions = {
    origin: (origin, callback) =>{
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    optionsSuccessStatus: 200,
    credentials: true
}

// add All thirdparty middleware in to express route
app.use(express.json());
app.use(cors(corsOptions));
dotenv.config();

// api endpoint for CRUD operation and handle the different route
app.use('/api/users', usersRout);
app.use('/api/weathers', weatherRout);

// this fetching data from openweaherapp Api and store in db hourly
// cron.schedule('0 * * * *', () =>{
//     fetchData();
// });

// this will send the emails to every user in database every 3  hour
// cron.schedule('0 */3 * * *', () =>{
//     sendMail();
// });

const PORT = process.env.PORT || 5001;
//connect to the Database and then listen on port that given
mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true , useNewUrlParser: true })
.then(() => app.listen(PORT, console.log(`Server running on PORT: ${PORT}`)))
.catch(e => console.log(e));