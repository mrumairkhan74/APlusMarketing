const jwt = require('jsonwebtoken')
const UserDetail = require('../models/userModel')



const Authentication = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: 'UnAuthorized' })
        }


        // Decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Optional: check if user still exists in DB
        const user = await UserDetail.findById(decoded._id).select('-password');
        if (!user) {
            return res.status(401).json({ error: 'Unauthorized: User not found' });
        }

        // Attach user to request
        req.UserDetail = {
            UserDetailId: user._id,
            email: user.email,
            role: user.role
        };
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'Unauthorized: Invalid or Expired Token' });
    }
}

module.exports = Authentication 