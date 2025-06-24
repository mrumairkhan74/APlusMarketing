import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, registerApi, logoutApi } from "./AuthApi";

export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        return await loginApi(userData);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login Failed')
    }
})
export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        return await registerApi(userData);
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Register Failed')
    }
})
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        return await logoutApi();
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Logout Failed')
    }
})




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
    },
    reducers: {
        resetAuthState: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.user;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

            // ✅ Add this for logout to work
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isSuccess = true;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            });
    }

})

export const { resetAuthState, logout } = authSlice.actions;
export default authSlice.reducer