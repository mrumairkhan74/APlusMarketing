import axios from "axios";
const apiUrl = import.meta.env.VITE_BACKEND_API;

// CREATE property
export const createPropertyApi = async (propertyData) => {
    const res = await axios.post(`${apiUrl}/property/create`, propertyData, { withCredentials: true });
    return res.data;
};

// GET all properties (use GET if no body needed)
export const getPropertyApi = async () => {
    const res = await axios.get(`${apiUrl}/property/get`, { withCredentials: true });
    return res.data.property;
};

// GET property by ID
export const getPropertyByIdApi = async (id) => {
    const res = await axios.get(`${apiUrl}/property/get/${id}`, { withCredentials: true });
    return res.data.property;
};

// UPDATE property by ID
export const updatePropertyApi = async (id, updatePropertyData) => {
    const res = await axios.put(`${apiUrl}/property/update/${id}`, updatePropertyData, { withCredentials: true });
    return res.data;
};

// DELETE property by ID
export const deletePropertyApi = async (id) => {
    const res = await axios.delete(`${apiUrl}/property/delete/${id}`, { withCredentials: true });
    return res.data;
};

// add wishlist
export const toggleWishlistApi = async (propertyId) => {
    const response = await axios.put(`${apiUrl}/property/wishlist/${propertyId}`, {}, { withCredentials: true });
    return response.data;
};


// get wishlist

export const getWishListApi = async () => {
    try {
        const response = await axios.get(`${apiUrl}/property/wishlist`, { withCredentials: true });
        return response.data.wishlist;
    } catch (error) {
        if (error.response?.status === 401) {
            throw new Error("Please login to view wishlist");
        }
        throw error;
    }
};
