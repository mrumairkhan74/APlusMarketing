import React, { useState } from 'react';

const CreatePropertyForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        area: '',
        price: '',
        priceUnit: 'lac',
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
        data.append('area', formData.area);
        data.append('price', formData.price);
        data.append('priceUnit', formData.priceUnit);
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
                <label className="block text-yellow-700 font-semibold mb-1">Area</label>
                <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                />
            </div>

            {/* Price & Unit */}
            <div>
                <label className="block text-yellow-700 font-semibold mb-1">Price</label>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full sm:w-2/3 p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter price"
                        required
                    />
                    <select
                        name="priceUnit"
                        value={formData.priceUnit}
                        onChange={handleChange}
                        className="w-full sm:w-1/3 p-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        <option value="lac">Lac</option>
                        <option value="crore">Crore</option>
                    </select>
                </div>
            </div>

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
