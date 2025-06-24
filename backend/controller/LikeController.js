const PropertyDetail = require('../models/propertyModel');
const UserDetail = require('../models/userModel');

const toggleWishlist = async (req, res) => {
  try {
    const { id } = req.params; // Property ID
    const userId = req.UserDetail.UserDetailId;

    const property = await PropertyDetail.findById(id);
    const user = await UserDetail.findById(userId);

    if (!property || !user) {
      return res.status(404).json({ error: 'Property or User not found' });
    }

    const propertyIndex = property.likes.indexOf(userId);
    const userIndex = user.wishlist.indexOf(id); // id is property ID

    if (propertyIndex === -1) {
      // ✅ Add to property.likes
      property.likes.push(userId);

      // ✅ Add to user.wishlist
      user.wishlist.push(id);

      await property.save();
      await user.save();

      return res.status(200).json({ message: 'Added to wishlist', property });
    } else {
      // ✅ Remove from property.likes
      property.likes.splice(propertyIndex, 1);

      // ✅ Remove from user.wishlist
      if (userIndex !== -1) user.wishlist.splice(userIndex, 1);

      await property.save();
      await user.save();

      return res.status(200).json({ message: 'Removed from wishlist', property });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserWishlist = async (req, res) => {
  try {
    const userId = req.UserDetail.UserDetailId;
    const user = await UserDetail.findById(userId).populate('wishlist');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ wishlist: user.wishlist });
  } catch (error) {
    console.error('getUserWishlist error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { toggleWishlist,getUserWishlist };
