import { Routes, Route } from 'react-router-dom'
import { MovieDetail, MovieList, Search, PageNotFound } from '../pages';
// import { Header, Footer } from '../components'


function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
        <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" />} />
        <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" />} />
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" />} />

        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default AllRoutes 