import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_URL, {
      params: {
        s: 'superman',
        apikey: process.env.REACT_APP_OMDAPI_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movie = payload;
    },
  },
  extraReducers: {
    [fetchMovies.panding]: () => {
      console.log('pending');
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log('fetch succsess');
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log('rejected');
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
