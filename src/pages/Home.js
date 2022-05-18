import React, { useEffect } from 'react';
import MovieList from 'components/MovieList';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { fetchMovies } from 'features/movie/movieSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Hero />
      <MovieList />
    </>
  );
}
