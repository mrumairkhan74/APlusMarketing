import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties, wishlistProperty } from '../features/property/propertySlice';
import { Link, useNavigate } from 'react-router-dom';
import { FcBookmark, FcCheckmark } from "react-icons/fc";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Loading from './Loading';

const PropertyCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { properties, isLoading, isError, message } = useSelector((state) => state.property);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const handleWishList = (id) => {
    if (!user) {
      return navigate('/login');
    }
    dispatch(wishlistProperty(id));
  };

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-yellow-500">Error: {message}</p>;

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 p-6 w-full">

        {properties.map((property) => {
          const isWishlisted = user && property.likes?.includes(user._id);
          const status = property.status?.toLowerCase();
          const isAvailable = status === 'available';

          return (
            <div
              key={property._id}
              className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
              title='Property Images'
                src={property.image?.url || '/placeholder.jpg'}
                alt={property.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-gray-800">{property.title}</h2>
                <p className="text-sm text-gray-600">📍Address {property.address}</p>
                <p className="text-sm text-gray-600">📏 Description: {property.description}</p>
<p className="text-sm text-gray-600">📞 Contact: {property.contact}</p>
                <div className="flex justify-between items-center mt-2">

                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
                    ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                  >
                    {isAvailable ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5" />
                        Available
                      </>
                    ) : (
                      <>
                        <XCircleIcon className="w-5 h-5" />
                        Sold
                      </>
                    )}
                  </span>
                </div> 

                <button
                  onClick={() => handleWishList(property._id)}
                  title='WishList'
                  className={`mt-2 px-3 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-200
                  ${isWishlisted
                      ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                      : 'border border-yellow-600 text-yellow-600 hover:bg-yellow-100'}`}
                >
                  {isWishlisted ? (
                    <>
                      <FcCheckmark className="text-lg" /> Wishlisted
                    </>
                  ) : (
                    <>
                      <FcBookmark className="text-lg" /> Wishlist
                    </>
                  )}
                </button>

                <Link
                title='View More'
                  to={`/property/${property._id}`}
                  className="text-yellow-600 text-sm mt-3 underline hover:text-yellow-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default PropertyCard;
