const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

const usersRout = require('./router/users');

//All thirdparty middleware
app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/api/users', usersRout);

const PORT = process.env.PORT || 5001;

//connect to the Database
mongoose.connect("mongodb://localhost/test")
.then(() => app.listen(PORT, console.log(`Server running on PORT: ${PORT}`)))
.catch(e => console.log(e));