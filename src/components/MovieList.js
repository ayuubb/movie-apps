import { useSelector } from 'react-redux';
import { getAllMovies } from 'features/movies/movieSlice';
import Movie from 'part/Movie';
import SearchBox from 'part/SearchBox';

export default function MovieList() {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => <Movie key={index} data={movie} />)
    ) : (
      <div className="movies__error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <section className="product section container">
      <SearchBox />
      <div className="product__container grid">{renderMovies}</div>
    </section>
  );
}
