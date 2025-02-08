import React from 'react'
import { useState, useEffect } from "react";

const useFetch = (apiPath) => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=8ddd64157ba3bcfbae125b38939b6dd6`;
    useEffect(() => {
       async function fetchMovies(){
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
       }
         fetchMovies();

      }, [url]);



  return (
    {data}
  )
}

export default useFetch