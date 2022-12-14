import Gif from "./Gif";
import './Gif.css'

export default function List({ gifs }) {

  return (
    <div className="listOfGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
