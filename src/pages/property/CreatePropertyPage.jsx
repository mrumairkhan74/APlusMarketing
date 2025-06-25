import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProperty, resetPropertyState } from '../../features/property/propertySlice';
import CreatePropertyForm from './CreatePropertyForm';

const CreatePropertyPage = () => {
    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.property);

    // Reset state when component mounts or unmounts
    useEffect(() => {
        return () => {
            dispatch(resetPropertyState());
        };
    }, [dispatch]);

    const handleCreate = (formData) => {
        dispatch(resetPropertyState());
        dispatch(createProperty(formData));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-6 text-center">
                    Create Property
                </h2>

                <CreatePropertyForm onSubmit={handleCreate} />

                {/* Feedback messages */}
                <div className="mt-4 text-center">
                    {isLoading && <p className="text-yellow-600">Creating property...</p>}
                    {isSuccess && (
                        <p className="text-green-600">Property created successfully!</p>
                    )}
                    {isError && <p className="text-yellow-600">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default CreatePropertyPage;
