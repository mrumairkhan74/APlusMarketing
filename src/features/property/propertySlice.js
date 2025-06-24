import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    createPropertyApi,
    getPropertyApi,
    getPropertyByIdApi,
    updatePropertyApi,
    deletePropertyApi,
    toggleWishlistApi,
    getWishListApi
} from './propertyApi';

// Async Thunks
export const createProperty = createAsyncThunk('property/create', async (propertyData, thunkAPI) => {
    try {
        return await createPropertyApi(propertyData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error in Creating Property');
    }
});

export const fetchProperties = createAsyncThunk('property/fetchAll', async (_, thunkAPI) => {
    try {
        return await getPropertyApi();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error in Fetching Properties');
    }
});


export const fetchPropertyById = createAsyncThunk('property/fetchById', async (id, thunkAPI) => {
    try {
        return await getPropertyByIdApi(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error in Fetching Property');
    }
});

export const updateProperty = createAsyncThunk('property/update', async ({ id, data }, thunkAPI) => {
    try {
        return await updatePropertyApi(id, data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error in Updating Property');
    }
});

export const deleteProperty = createAsyncThunk('property/delete', async (id, thunkAPI) => {
    try {
        await deletePropertyApi(id);
        return id;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error in Deleting Property');
    }
});

export const wishlistProperty = createAsyncThunk(
    'property/wishlist',
    async (id, thunkAPI) => {
        try {
            const response = await toggleWishlistApi(id);
            return response.property;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Error while adding property to Wishlist'
            );
        }
    }
);

export const fetchWishList = createAsyncThunk('property/fetchwishlist', async (_, thunkAPI) => {
    try {
        return await getWishListApi();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Error in Fetching Properties');
    }
});

// Slice
const propertySlice = createSlice({
    name: 'property',
    initialState: {
        properties: [],
        wishlistProperties: [],
        selectedProperty: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
    },
    reducers: {
        resetPropertyState: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // --- CREATE ---
            .addCase(createProperty.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createProperty.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.properties.push(action.payload);
            })
            .addCase(createProperty.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // --- GET ALL ---
            .addCase(fetchProperties.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.properties = action.payload;
            })
            .addCase(fetchProperties.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // --- GET BY ID ---
            .addCase(fetchPropertyById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPropertyById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.selectedProperty = action.payload;
            })
            .addCase(fetchPropertyById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // --- UPDATE ---
            .addCase(updateProperty.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProperty.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;

                const updated = action.payload.property; // ✅ extract the actual updated property

                state.properties = state.properties.map((prop) =>
                    prop._id === updated._id ? updated : prop
                );
                state.selectedProperty = updated; // optional: update the selected one too
            })
            .addCase(updateProperty.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // --- DELETE ---
            .addCase(deleteProperty.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteProperty.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.properties = state.properties.filter((prop) => prop._id !== action.payload);
            })
            .addCase(deleteProperty.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // --- FETCH WISHLIST ---
            .addCase(fetchWishList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.wishlistProperties = action.payload;
            })
            .addCase(fetchWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            // --- WISHLIST TOGGLE ---
            .addCase(wishlistProperty.fulfilled, (state, action) => {
                const updated = action.payload;

                // Update in `properties`
                const propIndex = state.properties.findIndex(p => p._id === updated._id);
                if (propIndex !== -1) state.properties[propIndex] = updated;

                // Update in `recentProperties` if defined
                if (Array.isArray(state.recentProperties)) {
                    const recentIndex = state.recentProperties.findIndex(p => p._id === updated._id);
                    if (recentIndex !== -1) state.recentProperties[recentIndex] = updated;
                }
                // Don't push if already exists
                if (!state.wishlistProperties.some(p => p._id === updated._id)) {
                    state.wishlistProperties.push(updated);
                }
                // Remove from wishlist if unliked
                if (Array.isArray(state.wishlistProperties)) {
                    const liked = updated.likes?.includes(updated._id);
                    state.wishlistProperties = state.wishlistProperties.filter(p => p._id !== updated._id);
                    if (liked) {
                        state.wishlistProperties.push(updated);
                    }
                }
            })
            .addCase(wishlistProperty.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            });
    }

});

export const { resetPropertyState } = propertySlice.actions;
export default propertySlice.reducer;
