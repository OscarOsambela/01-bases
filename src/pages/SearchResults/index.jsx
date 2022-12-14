import List from "../../components/Gifs/List";
import useGifs from "../../hooks/useGif";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      {loading ? (
        <i className="loading">Cargando...</i>
      ) : (
        <>
          <h3 className="app-title">{decodeURI(keyword)}</h3>
          <List gifs={gifs} />
        </>
      )}
      <button onClick={handleNextPage}>Siguiente</button>
    </>
  );
}
