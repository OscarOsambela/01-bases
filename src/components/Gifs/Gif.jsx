import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link href={`/gif/${id}`} className="gif-link">
        <img src={url} alt={title} key={id}/>
      </Link>
    </div>
  );
}
export default React.memo(Gif)