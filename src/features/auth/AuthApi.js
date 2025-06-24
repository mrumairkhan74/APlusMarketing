import axios from "axios";
const apiUrl = import.meta.env.VITE_BACKEND_API

// Login User
export const loginApi = async (userData) => {
    const res = await axios.post(`${apiUrl}/user/login`, userData, { withCredentials: true })

    return res.data;

}

// register User 
export const registerApi = async (userData) => {

    const res = await axios.post(`${apiUrl}/user/create`, userData, { withCredentials: true })

    return res.data;

}
export const logoutApi = async () => {

    const res = await axios.get(`${apiUrl}/user/logout`, {}, { withCredentials: true })

    return res.data;

} 