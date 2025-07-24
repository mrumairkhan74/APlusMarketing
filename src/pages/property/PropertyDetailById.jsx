import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPropertyById } from '../../features/property/propertySlice';

const PropertyDetailById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { selectedProperty, isLoading, isError, message } = useSelector((state) => state.property);

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <p className="text-center text-blue-500">Loading property...</p>;
  if (isError) return <p className="text-center text-yellow-500">Error: {message}</p>;
  if (!selectedProperty) return <p className="text-center text-gray-500">No property found</p>;

  return (
    <div className="w-full  p-[40px]">

      <h1 className='text-5xl text-center font-mono font-bold p-5 text-yellow-500'>Property Detail</h1>
      <div className="w-full m-10 rounded-md flex items-center justify-between">
        <div className="flex-2 w-[400px] h-[500px] shadow-md shadow-yellow-500 rounded-md">
          <img src={selectedProperty.image?.url} width={"50%"} height={"100%"} className='object-cover w-full h-full rounded-md' alt="" />
        </div>
        <div className="flex-3 items-center p-10 justify-center text-center">
          <div className="flex flex-col">
            <h1 className='text-7xl font-bold tracking-wide font-mono p-2 m-3'>Title:{selectedProperty.title}</h1>
            <p className='text-4xl tracking-wide font-mono  p-2 m-3'> Address: <span className='text-gray-500'> {selectedProperty.address}</span></p>
            <p className='text-3xl tracking-wide font-mono  p-2 m-3'>Description: <span className='text-gray-500'>{selectedProperty.description}</span> </p>
            <h2 className='text-5xl text-yellow-500 font-bold tracking-wide font-mono p-2 m-3'>Contact No: {selectedProperty.contact}</h2>
            <a href="tel:'+923355500590'" className="bg-yellow-500 p-2 text-white m-3 rounded-md text-2xl">Call Now</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PropertyDetailById;
