const PropertyDetail = require('../models/propertyModel');
const cloudinary = require('../utils/Cloudinary'); // ensure correct filename and path
const { Readable } = require('stream');

// create Property
const createProperty = async (req, res) => {
    try {
        const { title, address, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }

        // Upload image buffer to Cloudinary
        const bufferStream = new Readable();
        bufferStream.push(req.file.buffer);
        bufferStream.push(null);

        const streamUpload = () => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: 'A+ Marketing',
                        resource_type: 'image'
                    },
                    (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    }
                );
                bufferStream.pipe(stream);
            });
        };

        const cloudinaryResult = await streamUpload();

        // Create the property
        const property = await PropertyDetail.create({
            title,
            address,
            description,// ✅ Add this field to save unit
            image: {
                url: cloudinaryResult.secure_url,
                public_id: cloudinaryResult.public_id
            },
            likes: []
        });

        return res.status(201).json({
            message: 'Property created successfully',
            property
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};


// show All Property
const getProperty = async (req, res) => {
    try {
        const property = await PropertyDetail.find();
        if (!property) {
            return res.status(404).json({ error: 'No Property Available' })
        }
        return res.status(200).json({ message: 'Property Below', property })
    }
    catch (error) {
        return res.status(500).json({ error: 'Something Went Wrong' })
    }
}




// get Property by Id 

const getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await PropertyDetail.findById(id);
        if (!property) {
            return res.status(404).json({ error: 'No Property Available' })
        }
        return res.status(200).json({ property })
    }
    catch {
        return res.status(500).json({ error: 'Something Went Wrong' })
    }
}


// Update Property Detail
const updateProperty = async (req, res) => {
    try {
        const { id } = req.params
        const updateProperty = req.body
        const property = await PropertyDetail.findByIdAndUpdate(id, updateProperty, { new: true })
        if (!property) {
            return res.status(404).json({ error: "Invalid ID" })
        }

        return res.status(200).json({
            message: 'Property updated successfully',
            property
        });
    }
    catch (error) {
        return res.status(500).json({ error: 'Something Went Wrong' })
    }
}


const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params
        const property = await PropertyDetail.findByIdAndDelete(id);
        if (!property) {
            return res.status(404).json({ error: "Invalid Id" })
        }
        return res.status(200).json({ message: "Deleted Successfully" })
    }
    catch {
        return res.status(500).json({ error: 'Something Went Wrong' })
    }
}










module.exports = {
    createProperty,
    getProperty,
    getPropertyById,
    updateProperty,
    deleteProperty,

}
