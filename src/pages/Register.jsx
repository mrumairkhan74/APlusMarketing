import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, resetAuthState } from '../features/auth/AuthSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message, user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user && isSuccess) {
      toast.success("Registered Successfully");
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }

    if (isError) {
      toast.error(message);
    }

    return () => {
      if (isSuccess || isError) {
        dispatch(resetAuthState());
      }
    };
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white border-4 border-yellow-500 rounded-xl w-full max-w-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-6">
              <img
                src="https://res.cloudinary.com/mrumairkhan74/image/upload/v1750821214/A_Plus_Logo_umdbd2.png"
                alt="A+ Logo"
                className="w-40"
              />
              <h1 className="text-3xl font-bold uppercase font-mono text-yellow-500 mt-3">
                Register
              </h1>
            </div>

            <div className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Enter Name"
                className="w-full border-2 border-yellow-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                autoComplete="off"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                className="w-full border-2 border-yellow-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                name="contact"
                type="tel"
                placeholder="Enter Contact"
                className="w-full border-2 border-yellow-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                autoComplete="off"
                value={formData.contact}
                onChange={handleChange}
              />

              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full border-2 border-yellow-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full border-2 border-yellow-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
                autoComplete="off"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
              title='register'
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-md font-bold uppercase tracking-wide"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
