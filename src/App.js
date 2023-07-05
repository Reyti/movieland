import React from "react";
import { useEffect } from "react";

const APIURL = "http://www.omdbapi.com?apikey=f57c1a45";
const searchMovies = async (tittle) => {
  const response = await fetch(`${APIURL}&s=${tittle}`);
  const data = await response.json();

  console.log(data.Search);
};

useEffect(() => {
  searchMovies("Spiderman");
}, []);

const App = () => {
  return <></>;
};

export default App;
