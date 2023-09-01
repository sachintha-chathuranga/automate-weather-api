const express = require('express');

const { getAllWeather, getWeatherById } = require('../controller/weather');

const router = express.Router();


// router.route('/').get(getAllWeather);

// route for get users weather data for a given day
router.route('/:id').get(getWeatherById);

module.exports = router;