import React from 'react';

export default function Movie(props) {
  const { data } = props;
  return (
    <div className="product__card">
      <div className="product__circle"></div>
      <img className="product__img" src={data.poster} alt={data.title} />
      <h3 className="product__title">{data.title}</h3>
      <span className="product__price">{data.year}</span>
      {/* <button className="button--flex product__button">
        <i className="ri-shopping-bag-line"></i>
      </button> */}
    </div>
  );
}
