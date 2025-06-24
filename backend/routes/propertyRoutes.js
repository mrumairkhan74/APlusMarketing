const express = require('express')

const { createProperty, getProperty, getPropertyById, deleteProperty, updateProperty } = require('../controller/PropertyController');
const { toggleWishlist, getUserWishlist } = require('../controller/LikeController')
const upload = require('../config/upload');
const Authentication = require('../config/auth');
const router = express.Router()


router.get('/get/:id', getPropertyById);

router.get('/get', getProperty);
router.post('/create', upload.single('image'), Authentication, createProperty);
router.put('/update/:id', Authentication, updateProperty);
router.delete('/delete/:id', Authentication, deleteProperty);
router.put('/wishlist/:id', Authentication, toggleWishlist);
router.get('/wishlist', Authentication, getUserWishlist);

module.exports = router