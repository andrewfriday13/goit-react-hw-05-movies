import Home from "pages/home/home";
import Movies from "pages/movies/movies";
import { NavLink, Route, Routes } from "react-router-dom";
import Cats from "./cats/cats";
import Reviews from "./reviews/reviews";
import TrendMovie from "./trendMovie/trendMovie";



export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/movies'>Movise</NavLink></li>
        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/:id" element={<TrendMovie/>}>
        <Route path="cats" element={<Cats/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        </Route> 

      <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </div>

  );
};