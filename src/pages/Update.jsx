import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchProperties, updateProperty } from "../features/property/propertySlice"
import Loading from '../components/Loading'

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { properties, isLoading, isError, message } = useSelector(state => state.property)

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        location: '',
        description: '',
        status: 'available' // default status
    })

    useEffect(() => {
        dispatch(fetchProperties())
    }, [dispatch])

    useEffect(() => {
        const selected = properties.find(p => p._id === id)
        if (selected) {
            setFormData({
                title: selected.title || '',
                price: selected.price || '',
                location: selected.location || '',
                description: selected.description || '',
                status: selected.status || 'Available',
            })
        }
    }, [properties, id])

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await dispatch(updateProperty({ id, data: formData }));
        await dispatch(fetchProperties()); // ✅ refresh latest
        navigate('/dashboard');
    }
    
    

    if (isLoading) return <Loading/>
    if (isError) return <div>Error: {message}</div>

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-4">Update Property</h2>

                <label className="block mb-2">Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                    disabled={true}
                />

                <label className="block mb-2">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded mb-4"
                    required
                    disabled={true}
                />

                <label className="block mb-2">Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded mb-4 font-semibold 
        ${formData.status === 'available' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}
                >
                    <option value="available" className="text-green-600">Available</option>
                    <option value="sold" className="text-red-600">Sold</option>
                </select>


                <button
                title='update'
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
                >
                    Update Property
                </button>
            </form>
        </div>
    )
}

export default Update
