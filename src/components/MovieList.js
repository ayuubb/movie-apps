import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../part/Movie';

export default function MovieList() {
  const [movie, setMovie] = useState([]);
  const search = 'superman';

  useEffect(() => {
    axios
      // .get(`http://www.omdbapi.com/?apikey=7819d7f3&s=Batman&page=1`)
      .get(process.env.REACT_APP_URL, {
        params: {
          s: search,
          apikey: process.env.REACT_APP_OMDAPI_KEY,
        },
      })
      .then((response) => {
        // console.log(response.data.Search);
        setMovie(response.data.Search);
      });
  });
  return (
    <section className="product section container">
      <h2>test ayub</h2>
      <div className="product__container grid">
        {movie.map((item) => {
          return (
            <Movie
              key={item.imdbID}
              poster={item.Poster}
              title={item.Title}
              year={item.Year}
            />
          );
        })}
      </div>
    </section>
  );
}

// `${process.env.REACT_APP_BASE_URL}?apikey=${process.env.REACT_APP_OMDAPI_KEY}&s=Batman&page=2`
