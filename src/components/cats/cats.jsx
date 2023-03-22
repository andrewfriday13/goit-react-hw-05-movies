import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Cats = () => {
  const[cats, setCats ] =useState([])
  const {trendId} = useParams()

useEffect(() => {
getMovie(trendId)
.then(el => setCats(el.cast))
.catch(el => console.log(el))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const getMovie = async (moviesId) => {
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const BASE_URL = `https://api.themoviedb.org/3/movie/`
    const movieDetail = await axios.get(` ${BASE_URL}${moviesId}/credits?api_key=${API_KEY}`)
    return   movieDetail.data
  }



//  запит по акторах
    return (<div>
        якісь актори
        <ul>
          {cats.map(({id, name,profile_path}) => (
             <li key={id}>
              <h3>{name}</h3>
              <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt=""  width='90'/>
            </li>
          ))}
        </ul>
        <ul>
        </ul>
    </div>)
}

export default Cats

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=key