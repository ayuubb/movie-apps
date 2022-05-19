import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesDetails, getMovieDetail } from 'features/movies/movieSlice';

export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieDetail);
  console.log(data);
  useEffect(() => {
    dispatch(fetchMoviesDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div>
      <section className="about section container">
        <div className="about__container grid">
          <img src={data.Poster} alt={data.Title} className="about__img" />

          <div className="about__data">
            <h2 className="section__title about__title">{data.Title}</h2>

            <div className="about__details">
              <p className="about__details-description">
                <box-icon
                  name="star"
                  className="about__details-icon"
                ></box-icon>
                IMDB Rating : {data.imdbRating}
              </p>
              <p className="about__details-description">
                <box-icon
                  name="volume"
                  className="about__details-icon"
                ></box-icon>
                IMDB Votes: {data.imdbVotes}
              </p>
              <p className="about__details-description">
                <box-icon
                  name="time-five"
                  className="about__details-icon"
                ></box-icon>
                Runtime : {data.Runtime}.
              </p>
              <p className="about__details-description">
                <box-icon
                  name="calendar-alt"
                  className="about__details-icon"
                ></box-icon>
                Year : {data.Year}
              </p>
            </div>

            <p className="about__description">{data.Plot}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
