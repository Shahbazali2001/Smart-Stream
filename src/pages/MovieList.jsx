import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const MovieList = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
  async function fetchMovies() {
    const response = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=8ddd64157ba3bcfbae125b38939b6dd6");
    const data = await response.json();
    setMovies(data.results);
  }
  fetchMovies();

}, []);









  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
         {
          movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))
         }
        </div>
      </section>
    </main>
  );
};

export default MovieList;
