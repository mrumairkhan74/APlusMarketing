import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishList, wishlistProperty } from '../features/property/propertySlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlistProperties, isLoading } = useSelector((state) => state.property);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      dispatch(fetchWishList());
    }
  }, [dispatch, user, navigate]);

  const handleRemove = (id) => {
    dispatch(wishlistProperty(id));
  };

  if (isLoading) return <Loading/>;

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-yellow-500">My Wishlist</h1>

      {wishlistProperties.length === 0 ? (
        <p className="text-center text-gray-600">No properties in wishlist.</p>
      ) : (
        <div className="grid gap-4">
          {wishlistProperties.map((property) => (
            <div
              key={property._id}
              className="border p-4 rounded-md flex flex-col sm:flex-row gap-4 sm:items-center justify-between shadow-sm bg-white"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <img
                  src={property.image?.url || '/placeholder.jpg'}
                  alt={property.title}
                  className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-gray-600 text-sm">{property.address}</p>
                  <p className="text-yellow-500 font-medium">Rs. {property.price}</p>
                </div>
              </div>

              <button
              title='remove'
                onClick={() => handleRemove(property._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition w-full sm:w-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
