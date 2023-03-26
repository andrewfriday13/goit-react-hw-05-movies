import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import css from './app.module.css'


const Home = lazy(() => import('pages/home'));
const Movies = lazy(() => import('pages/movies'));
const Cats = lazy(() => import('./cats/cats'));
const Reviews = lazy(() => import('./reviews/reviews'));
const MovieDetails = lazy(() => import('../pages/movieDetails'));


export const App = () => {
  return (
    <div>
        <ul className={css.styleUl}>
          <li><NavLink className={css.link} to='/'>Home</NavLink></li>
          <li><NavLink className={css.link} to='/movies'>Movies</NavLink></li>
        </ul>
 <Suspense>
 <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/movies" element={<Movies/>}>
        {/* <Route path=":movieId" element={<Movie/>}/> */}
      </Route>
      <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cats" element={<Cats/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        </Route> 
    </Routes>
 </Suspense>
    </div>

  );
};
