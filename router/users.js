const express = require('express');

const { storeUser, updateUser, getAllUsers } = require('../controller/users');
const { validation } = require('../middleware/validation');

const router = express.Router();

// route to store user Details
router.route('/signUp').post(validation, storeUser);

// route to update users location
router.route('/update').put(updateUser);
// router.route('/').get(getAllUsers);

module.exports = router;