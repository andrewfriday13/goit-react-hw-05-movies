import Home from "pages/home/home";
import Movies from "pages/movies/movies";
import { NavLink, Route, Routes } from "react-router-dom";



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
      <Route path="/movies" element={<Movies/>}/>
    </Routes>
    </div>

  );
};
