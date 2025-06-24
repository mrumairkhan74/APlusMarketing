import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser, resetAuthState } from '../features/auth/AuthSlice'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const { isLoading, isSuccess, isError, message, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess && user) {
      toast.success('Login Successfully')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
    return () => {
      dispatch(resetAuthState())
    }
  }, [isSuccess, isError, message, user, dispatch, navigate])

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white border-4 border-red-500 rounded-xl w-full max-w-md p-6 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-6">
              <img
                src="https://res.cloudinary.com/mrumairkhan74/image/upload/v1750613892/A_logo_iw0zej.png"
                alt="A+ Logo"
                className="w-20 h-20"
              />
              <h1 className="text-3xl font-bold uppercase font-mono text-red-500 mt-3">
                Login
              </h1>
            </div>
            <div className="space-y-4">
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                className="w-full border-2 border-red-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full border-2 border-red-500 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                title='Login'
                className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-md font-bold uppercase tracking-wide"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login