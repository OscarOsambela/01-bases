import Gif from "../../components/Gifs/Gif";
import useSingleGif from "../../hooks/useSingleGif";

export default function Details({ params }) {
  const { gif } = useSingleGif({id: params.id});

  return (
    <>
      <h3>{gif.title}</h3>
      <Gif {...gif}/>
    </>
  );
}
