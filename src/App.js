import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import PageNottFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail:id" element={<MovieDetail />} />
        <Route path="notfound" element={<PageNottFound />} />
      </Routes>
    </div>
  );
}

export default App;
