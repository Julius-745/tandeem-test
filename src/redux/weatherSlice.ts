import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const endpoint = import.meta.env.VITE_API_ENDPOINT;
const key = import.meta.env.VITE_API_KEY || "";

interface WeatherState {
    data: any;
    units: string;
    city: string;
    loading: boolean;
    error: string;
}

const initialState: WeatherState = {
    city: "",
    data: null,
    units: "metric",
    loading: false,
    error: "",
};

export const fetchWeather: any = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${endpoint}?q=${city}&appid=${key}&units=metric`);
        return response.data;
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || 'An unexpected error occurred';
        return rejectWithValue(errorMessage);
      }
    }
  );

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setUnits(state, action) {
            state.units = action.payload;
        },
        setCity(state, action) {
            state.city = action.payload;
        },
        clearError(state) {
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error?.message || 'Failed to fetch weather data';
            });
    },
});

export const { setUnits, setCity, clearError } = weatherSlice.actions;

export default weatherSlice.reducer;
