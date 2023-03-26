import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import css from './catsStyle.module.css'

const Cats = () => {
  const[cats, setCats ] =useState([])
  const {movieId} = useParams()

useEffect(() => {
getMovie(movieId)
.then(el => setCats(el.cast))
.catch(el => console.log(el))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[movieId])

  const getMovie = async (moviesId) => {
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const BASE_URL = `https://api.themoviedb.org/3/movie/`
    const movieDetail = await axios.get(` ${BASE_URL}${moviesId}/credits?api_key=${API_KEY}`)
    return   movieDetail.data
  }
  const emptyImg = 'https://st2.depositphotos.com/1185628/7615/v/450/depositphotos_76156457-stock-illustration-secret-service-agent-icon.jpg'



//  запит по акторах
    return (<div>
       {cats.length === 0 
       ?
        <p>Sorry, we don`t have list actors</p> 
        :
        <ul className={css.listCats}>
          {cats.map(({id, name,profile_path}) => (
             <li key={id} className={css.itemCats}>
              {profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt=""  width='90'/>
              :
              (<img src={emptyImg} alt="" height='135' width='90'/>)}
              <span>{name}</span>
            </li>
          ))}
        </ul>}
    </div>)
}

export default Cats
