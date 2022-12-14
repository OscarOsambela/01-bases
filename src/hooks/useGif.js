import { useEffect, useState } from "react";
import getGifs from "../services/Gifs/getGifs";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [gifs, setGifs] = useState([]);
  //recuperamos la keyword del localstorage
  const keywordToUse = keyword || localStorage.getItem("lastKeyword");

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      //guardamos la keyword en el localstorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingPage(true);
    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingPage(false);
    });
  }, [page]);

  return { loading, loadingPage, gifs, setPage };
}
