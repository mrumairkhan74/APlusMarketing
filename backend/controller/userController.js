const UserDetail = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');




// for create user
const createUser = async (req, res) => {
    try {
        const { name, email, password, contact } = req.body;


        // Checking if User is already Exist or not
        const existingUser = await UserDetail.findOne({ email })
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' })
        }

        // generate Hashed Password 
        const salt = await bcrypt.genSalt(12)
        const hashed = await bcrypt.hash(password, salt);

        // creating user
        const user = await UserDetail.create({
            name, email, contact, password: hashed
        })


        // generate jwt token 
        const token = jwt.sign(
            { email: user.email, _id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '30m' }
        );


        // set token in cookie
        res.cookie('token', token);

        // return success response
        return res.status(201).json({ message: 'Created SuccessFully', user: { email: user.email, role: user.role, _id: user._id, name: user.name } })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}



// for login user 


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find email if existed or not
        const user = await UserDetail.findOne({ email });

        // if email is not existed the return error
        if (!user) {
            return res.status(404).json({ error: 'User Not Found' })
        }

        // matching password with Database
        const isMatch = await bcrypt.compare(password, user.password);

        // if Password Doesn't match error throw
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid Password' })
        }

        // creating jwt token
        const token = jwt.sign(
            {
                email: user.email,
                role: user.role,
                _id: user._id,
                name: user.name
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '30m' }
        );

        // set cookie
        res.cookie('token', token);

        // result 
        return res.status(200).json(
            {
                message: 'Login Successfully',
                user:
                {
                    email: user.email,
                    role: user.role,
                    _id: user._id,
                    name: user.name
                }
            });

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


//update user Detail 


const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        // updating user 
        const updateData = req.body;

        // first checking user by it id and update data
        const user = await UserDetail.findByIdAndUpdate(id, updateData, { new: true });

        // if user doesn't update the error throw 
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // return result
        return res.status(200).json({ message: "User updated", user: user });
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}




// Logout user

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,       // Use 'true' in production (with HTTPS)
            sameSite: 'None'    // Use 'Lax' or 'Strict' based on your use case
        });
        return res.status(200).json({ message: "User Logout Successfully" })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getUserWishlist = async (req, res) => {
    const user = await UserDetail.findById(req.UserDetail.UserDetailId)
      .populate('wishlist');
    return res.status(200).json({ wishlist: user.wishlist });
  };

// now exports all module
module.exports = {
    createUser,
    loginUser,
    updateUser,
    logoutUser,
    getUserWishlist
}