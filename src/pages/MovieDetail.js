import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMoviesDetails,
  getMovieDetail,
  removeMovieDetails,
} from 'features/movies/movieSlice';

export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieDetail);
  useEffect(() => {
    dispatch(fetchMoviesDetails(imdbID));
    return () => {
      dispatch(removeMovieDetails());
    };
  }, [dispatch, imdbID]);
  return (
    <div>
      <section className="about section container">
        {Object.keys(data).length === 0 ? (
          <div className="text-center">
            <h1>Loading ...</h1>
          </div>
        ) : (
          <>
            <div className="about__container grid">
              <img src={data.Poster} alt={data.Title} className="about__img" />

              <div className="about__data">
                <h2 className="section__title about__title">{data.Title}</h2>

                <div className="about__details">
                  <p className="about__details-description">
                    <box-icon
                      name="star"
                      color="yellow"
                      className="about__details-icon"
                    ></box-icon>
                    IMDB Rating : {data.imdbRating}
                  </p>
                  <p className="about__details-description">
                    <box-icon
                      name="volume"
                      color="gray"
                      className="about__details-icon"
                    ></box-icon>
                    IMDB Votes: {data.imdbVotes}
                  </p>
                  <p className="about__details-description">
                    <box-icon
                      name="time-five"
                      color="gray"
                      className="about__details-icon"
                    ></box-icon>
                    Runtime : {data.Runtime}.
                  </p>
                  <p className="about__details-description">
                    <box-icon
                      name="calendar-alt"
                      color="gray"
                      className="about__details-icon"
                    ></box-icon>
                    Year : {data.Year}
                  </p>
                </div>
                <p className="about__description">{data.Plot}</p>

                <div className="about__info">
                  <div className="about__info-info">
                    <span className="info__title">Director </span>
                    <span>{data.Director}</span>
                  </div>
                  <div className="about__info-info">
                    <span>Stars </span>
                    <span>{data.Actors}</span>
                  </div>
                  <div className="about__info-info">
                    <span>Generes </span>
                    <span>{data.Genre}</span>
                  </div>
                  <div className="about__info-info">
                    <span>Languages </span>
                    <span>{data.Language}</span>
                  </div>
                  <div className="about__info-info">
                    <span>Awards </span>
                    <span>{data.Awards}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
