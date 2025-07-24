import React, { useState } from 'react';

const CreatePropertyForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        description:''
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title);
        data.append('address', formData.address);
        data.append('description', formData.description);
        
        if (image) data.append('image', image);

        onSubmit(data);
    };

    return (
        <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
        >
            {/* Title */}
            <div>
                <label className="block text-yellow-700 font-semibold mb-1">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                />
            </div>

            {/* Address */}
            <div>
                <label className="block text-yellow-700 font-semibold mb-1">Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                />
            </div>

            {/* Area */}
            <div>
                <label className="block text-yellow-700 font-semibold mb-1">Description</label>
                <input
                    type="text"
                    name="area"
                    value={formData.descrition}
                    onChange={handleChange}
                    className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                />
            </div>

            {/* Price & Unit */}
            

            {/* Image Upload */}
            <div>
                <label className="block text-yellow-700 font-semibold mb-1">Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full p-2 border border-yellow-300 rounded bg-yellow-50 text-yellow-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-yellow-600 file:text-white hover:file:bg-yellow-700"
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit Property
            </button>
        </form>
    );
};

export default CreatePropertyForm;
