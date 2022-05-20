import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList';
import Hero from 'components/Hero';
import { fetchMovies } from 'features/movies/movieSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const movie = 'Superman';
  useEffect(() => {
    dispatch(fetchMovies({ movie: movie, counter: counter }));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  const next = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <section>
      <Hero />
      <MovieList />
      <div className="pagignation">
        <button
          className="pagignation__button"
          title="Previous"
          onClick={previous}
        />
        <p>1 / 3</p>
        <button className="pagignation__button" title="Next" onClick={next} />
      </div>
    </section>
  );
}
