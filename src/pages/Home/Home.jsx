import { useCallback } from "react";
import { Link, useLocation } from "wouter";
import List from "../../components/Gifs/List";
import TrendingSearches from "../../components/Gifs/TrendingSearches/index";
import useGifs from "../../hooks/useGif";
import SearchForm from "../SearchResults/SearchForm";

const POPULAR_GIFS = ["Matrix", "Panda", "Morty", "Mapache"];

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { gifs } = useGifs();

  //useCallback .- permite no renderizar la funcion cada vez que cambiamos de vista 
  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`search/${keyword}`);
  }, [pushLocation]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit}/>
      <div className="app-main">
        <div className="app-results">
          <h3>Última búsqueda</h3>
          <List gifs={gifs} />
        </div>
      </div>
      <h1>Gifs más populares</h1>
      <ul>
        {POPULAR_GIFS.map((popularGifs) => (
          <li key={popularGifs}>
            <Link to={`/search/${popularGifs}`}>Gifs de {popularGifs}</Link>
          </li>
        ))}
      </ul>
      <div className="app-category">
        <TrendingSearches />
      </div>
    </>
  );
}
