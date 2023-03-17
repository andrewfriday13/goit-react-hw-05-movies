
import axios from 'axios';
import { useEffect, useState } from 'react';



import { Link } from "react-router-dom"


const Home =()=>{
    /// тут має бути запит на тренди
    const[films, setFlilms] = useState([])

    useEffect(() => {
        getTrends()
        .then(({results}) =>setFlilms([...results]))
        .catch(err => console.log(err.message))
        .finally()
    },[])
    // const trends =["oldMan", "Superman", "Time", "Interstellar"]

    const getTrends = async () =>{ 
        const API_KEY = '7140726491bb46cefd66d6c99674ef87'
        const getFilms = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    return getFilms.data
    }

    return <div>
        <h1>Trending tooday</h1>
        <ul>
            {films.map(({id, title}) =>{
                return(
                    <li key={id}>
                       <Link key={id} to={`${title}`} >{title}</Link>
                    </li>
                )
            })}
        </ul>
    </div>
 }

 export default Home

