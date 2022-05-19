import { fetchMovies } from 'features/movies/movieSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function SearchBox() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchMovies(term));
    setTerm('');
  };
  return (
    <div>
      <form className="footer__subscribe" onSubmit={submitHandler}>
        <input
          type="text"
          value={term}
          placeholder="Search For Movies, Tv Series, Episode & more"
          className="footer__input"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="button" type="submit">
          <box-icon name="search" color="gray"></box-icon>
        </button>
      </form>
    </div>
  );
}
