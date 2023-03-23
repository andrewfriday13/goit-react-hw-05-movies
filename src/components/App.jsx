import Home from "pages/home";
import Movies from "pages/movies";
import { NavLink, Route, Routes } from "react-router-dom";
import Cats from "./cats/cats";

import Reviews from "./reviews/reviews";
import MovieDetails from "../pages/movieDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/movies'>Movies</NavLink></li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/movies" element={<Movies/>}>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cats" element={<Cats/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        </Route> 

        {/* <Route path=":movieId" element={<Movie/>}/> */}
      </Route>
    </Routes>
    </div>

  );
};
