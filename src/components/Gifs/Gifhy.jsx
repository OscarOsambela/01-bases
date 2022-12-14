import { Link, Route } from "wouter";
import Home from "../../pages/Home/Home";
import SearchResult from "../../pages/SearchResults";

export const Gifhy = () => {
  return (
    <div>
      <section className="app-component">
        <Link to="/">
          <h1>Gifs</h1>
        </Link>

       <Route component={Home} path="/"/>
        <Route component={SearchResult} path="/search/:keyword" />
       {/*   <Route component={Detail} path="/gif/:id" /> */}

        {/* <nav>
          <Link to="/gif/panda">gif panda</Link>
          <Link to="/gif/morty">gif Morty</Link>
          <Link to="/gif/mapache">gif mapache</Link>
        </nav> */}
      </section>
    </div>
  );
};
