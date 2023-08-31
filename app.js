const dotenv = require('dotenv');
const express = require('express');

const app = express();
const cors = require('cors');

dotenv.config({ path: './config/.env' });

const usersRout = require('./router/users');
const postsRout = require('./router/posts')

app.use(express.json());
app.use(cors());


//if request comming to this end point usersRout file will execute
app.use('/api/users', usersRout);
app.use('/api/posts', postsRout);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running on PORT: ${PORT}`));