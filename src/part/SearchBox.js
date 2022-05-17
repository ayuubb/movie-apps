import React from 'react';

export default function SearchBox() {
  return (
    <div className="footer__subscribe">
      <box-icon name="search" color="gray"></box-icon>
      <input
        type="text"
        placeholder="Search For Movies, Tv Series, Episode & more"
        className="footer__input"
      />
    </div>
  );
}
