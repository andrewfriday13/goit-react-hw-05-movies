import axios from 'axios';
import TrendList from 'components/trendList/trendList';
import { useEffect, useState,  } from 'react';

import {  Outlet,  } from "react-router-dom"


const Home =()=>{

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
        <TrendList getTrends={getTrends}/>
        <Outlet/>
    </div>
 }

 export default Home

