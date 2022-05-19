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
    addMovies: (state, { payload }) => {
      state.movies = payload;
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

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieDetail = (state) => state.movies.detailMovie;
export default movieSlice.reducer;
