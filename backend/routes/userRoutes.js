const express = require('express')
const { createUser, loginUser, updateUser, logoutUser, getUserWishlist } = require('../controller/userController')
const Authentication = require('../config/auth')
const router = express.Router()


router.post('/create', createUser);
router.post('/login', loginUser);
router.put('/update/:id', updateUser);
router.get('/logout', logoutUser);
router.get('/wishlist', Authentication, getUserWishlist);


module.exports = router