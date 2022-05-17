import React from 'react';

export default function Movie(props) {
  const { title, year, imdbID, type, poster } = props;
  return (
    <div className="product__card">
      <div className="product__circle"></div>
      <img className="product__img" src={props.poster} alt={props.title} />
      <h3 className="product__title">{props.title}</h3>
      <span className="product__price">{props.year}</span>
      {/* <button className="button--flex product__button">
        <i className="ri-shopping-bag-line"></i>
      </button> */}
    </div>
  );
}
