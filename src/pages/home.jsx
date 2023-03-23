import axios from 'axios';
import MovieList from 'components/MovieList/MovieList';
// import MoviesList from 'components/moviesList/moviesList';
// import TrendList from 'components/trendList/trendList';
import { useEffect, useState,  } from 'react';

// import {   Outlet,  } from "react-router-dom"


const Home =()=>{
    // const {movieId} = useParams()

    // eslint-disable-next-line no-unused-vars
    const[films, setFlilms] = useState([])
    
    useEffect(() => {
        getTrends()
        .then(({results}) =>setFlilms([...results]))
        .catch(err => console.log(err.message))
        .finally()
    },[])

    const getTrends = async () =>{ 
        const API_KEY = '7140726491bb46cefd66d6c99674ef87'
        const getFilms = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    return getFilms.data
    }

    return <div>
        <h1>Trending tooday</h1>
        <MovieList films={films}/>
    </div>
 }

 export default Home

