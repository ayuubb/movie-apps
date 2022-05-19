import { Routes, Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Header from './components/Header';
import PageNottFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="notfound" element={<PageNottFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
