import React from 'react'
import { useSearchParams } from 'react-router';
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('query');
  const { data: movies } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className="py-7">
        <h1 className="text-center text-3xl font-semibold">{movies.length > 0 ? `Results for "${queryTerm}"` : `No results for "${queryTerm}"`}</h1>
      </section>
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

  )
}

export default Search