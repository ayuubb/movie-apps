import React, { useEffect } from 'react';
import MovieList from 'components/MovieList';
import Hero from 'components/Hero';
import { fetchMovies } from 'features/movies/movieSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <section>
      <Hero />
      <MovieList />
    </section>
  );
}
