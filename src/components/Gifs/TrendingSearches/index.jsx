import { useEffect, useState, useRef } from "react";
import getTrendingTermsService from "../../../services/Gifs/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);

  return <Category options={trends} name="Tendencias" />;
}

//lazy loading
export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  });
  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
