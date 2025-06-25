import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProperties, deleteProperty } from '../features/property/propertySlice'
import Loading from '../components/Loading'

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { properties, isLoading, isError } = useSelector((state) => state.property);
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/login');
        } else {
            dispatch(fetchProperties())
        }
    }, [user, dispatch, navigate])

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this property?")) {
            dispatch(deleteProperty(id));
        }
    }

    if (isLoading) return <Loading />;
    if (isError) return <p className="text-center mt-4 text-yellow-500">Failed to load properties.</p>;

    return (
        <div className="px-4 md:px-10 py-6">
            <h1 className='text-center text-3xl font-mono font-bold p-4 text-yellow-500 tracking-wide'>Dashboard</h1>

            {properties.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">No properties found.</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {properties.map((property) => (
                        <div
                            key={property._id}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border-2 rounded-md shadow-md bg-white"
                        >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                                <img
                                title='Image'
                                    src={property.image?.url}
                                    loading="lazy"
                                    className="h-32 w-full sm:w-32 object-cover rounded-md"
                                    alt="property"
                                />
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-bold">Title: {property.title}</h1>
                                    <p className="text-sm text-gray-500">Address: {property.address}</p>
                                    <p className="text-sm text-gray-500">Area: {property.area}</p>
                                    <h2 className="font-semibold text-base">
                                        Price: <span className="text-yellow-500">{property.price} {property.priceUnit}</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                                <span
                                    className={`px-3 py-2 text-center rounded-full text-sm font-semibold 
                                        ${property.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-yellow-700'}`}
                                >
                                    {property.status}
                                </span>

                                <button
                                    title='Update'
                                    onClick={() => handleUpdate(property._id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
                                >
                                    Update
                                </button>

                                <button
                                    title='Delete'
                                    onClick={() => handleDelete(property._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dashboard
