import axios from 'axios';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState,  } from 'react';

import css from './stylePages.module.css'


const Home =()=>{

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
        <h1 className={css.title}>Trending tooday</h1>
        <MovieList films={films}/>
    </div>
 }

 export default Home

