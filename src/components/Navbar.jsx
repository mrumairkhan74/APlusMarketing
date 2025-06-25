import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/auth/AuthSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-600 font-semibold underline underline-offset-4'
      : 'hover:text-yellow-500';

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        setIsOpen(false);
        navigate('/login');
      });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-yellow-600 flex items-center gap-2">
          <img
          title='Logo'
<<<<<<< HEAD
            src="https://res.cloudinary.com/mrumairkhan74/image/upload/v1750769146/A_Plus_Logo_wnc4rr.png"
=======
            src="https://res.cloudinary.com/mrumairkhan74/image/upload/v1750821214/A_Plus_Logo_umdbd2.png"
>>>>>>> bd88f2e (new update)
            alt="A+ Logo"
            className="w-36 h-20 object-contain mix-blend-darken drop-shadow-lg"
          />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-yellow-600 focus:outline-none"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`flex flex-col items-center md:flex-row md:flex gap-5 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 py-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden md:flex'
            }`}
        >
          <NavLink to="/" className={navLinkClass} title='Home' onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/properties" className={navLinkClass} title='Properties' onClick={() => setIsOpen(false)}>Properties</NavLink>
          {user?.role === 'admin' && (
            <>
              <NavLink to="/dashboard" className={navLinkClass} title='Dashboard' onClick={() => setIsOpen(false)}>Dashboard</NavLink>
              <NavLink to="/createProperty" className={navLinkClass} title='Add Property' onClick={() => setIsOpen(false)}>Add Property</NavLink>
            </>
          )}

          <NavLink to="/about" className={navLinkClass} title='About' onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} title='Contact' onClick={() => setIsOpen(false)}>Contact</NavLink>


          {user ? (
            <>
              <NavLink to="/wishlist" className={navLinkClass} onClick={() => setIsOpen(false)}>Wishlist</NavLink>
              <button
              title='Logout'
                onClick={handleLogout}
                className="text-white bg-yellow-500 p-2 rounded-md hover:bg-yellow-600 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navLinkClass} title='Login' onClick={() => setIsOpen(false)}>Login</NavLink>
              <NavLink to="/register" className={navLinkClass} title='Register' onClick={() => setIsOpen(false)}>Register</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
