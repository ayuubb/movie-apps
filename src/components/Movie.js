import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
  const { data } = props;
  return (
    <div className="product__card">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="product__circle"></div>
        <img className="product__img" src={data.Poster} alt={data.Title} />
        <h3 className="product__title">{data.Title}</h3>
        <span className="product__price">{data.Year}</span>
      </Link>
    </div>
  );
}
