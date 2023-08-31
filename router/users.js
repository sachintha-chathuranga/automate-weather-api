const express = require('express');

const { storeUser, getAllUsers } = require('../controller/users');


const router = express.Router();

//if request comming to this end point these function will execute
router.route('/signUp').post(storeUser);
router.route('/').get(getAllUsers);

module.exports = router;