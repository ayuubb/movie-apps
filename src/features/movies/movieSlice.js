import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (term) => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL, {
        params: {
          s: term,
          apikey: process.env.REACT_APP_OMDAPI_KEY,
          page: '1',
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchMoviesDetails = createAsyncThunk(
  'movies/fetchMoviesDetails',
  async (id) => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL, {
        params: {
          i: id,
          plot: 'full',
          apikey: process.env.REACT_APP_OMDAPI_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  movies: {},
  detailMovie: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeMovieDetails: (state) => {
      state.detailMovie = {};
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log('pending');
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log('fetch succsess');
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log('rejected');
    },
    [fetchMoviesDetails.fulfilled]: (state, { payload }) => {
      console.log('fetch succsess');
      return { ...state, detailMovie: payload };
    },
  },
});

export const { removeMovieDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieDetail = (state) => state.movies.detailMovie;
export default movieSlice.reducer;
