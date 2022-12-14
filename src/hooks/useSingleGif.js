import { useEffect, useState } from "react";
import useGifs from "../../hooks/useGif";
import getSingleGif from "../services/Gifs/getSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

    const [gif, setGif] = useState(gifFromCache);

    useEffect(()=>{
        if(!gif){
            getSingleGif({id}).then(gif=>{
                setGif(gif)
            })
        }
    }, [gif, id])

  return {gif};
}
