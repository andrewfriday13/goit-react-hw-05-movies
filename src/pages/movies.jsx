import { useState, useEffect } from "react"
import axios from 'axios';
import {  Outlet, useSearchParams } from "react-router-dom";
import FormSearch from "components/formSearch/formSearch";
// import css from './stylePages.module.css'

import MovieList from "components/MovieList/MovieList";



const Movies =()=>{

const[films, setFlilms] = useState([])
const[sendFetch, setSendFetch] =useState(false)
const [searchParams, setSearchParams] = useSearchParams();
const[ emptyList, setEmptyList] =useState(false) 


const search  = searchParams.get("search") ?? "";
const[nameFilm, setNameFilm] = useState(search)

useEffect(() => {

    getFilms(nameFilm )
    .then(({results}) =>   {console.log(results); setFlilms([ ...results])})
    .catch(err => console.log(err.message))
    .finally()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [ sendFetch])

  const getFilms = async (search) =>{ 
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const getFilms = await 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
    return getFilms.data 
}

const handleChange = ({target}) => {
    const { value} =target
    if(value === '') return setSearchParams()
    setNameFilm(value) 
    setSearchParams({ search : target.value })
}

const handleSabmit = event =>{
    event.preventDefault()
    getFilms(event.target)
    setSendFetch(!sendFetch)
    document.querySelector('input').value = '';
    setEmptyList(true)
}

return <>
     {/* <span className={css.spanSearch}>Search Films</span> */}
     <FormSearch

     search={search }
      handleSabmit={handleSabmit}
      handleChange={handleChange}
      />

       {  (emptyList && films.length === 0 )&& <p>Please, change your request</p>}
       <MovieList films={films}/>
       <Outlet/>
    </>
 }

 export default Movies


//  Movies.propTypes = {
//     movieId: 
//  }