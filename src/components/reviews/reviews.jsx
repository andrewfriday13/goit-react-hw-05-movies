
import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"


const Reviews = () => {
  const[reviews, setReviews ] =useState([])
  const {movieId} = useParams()

useEffect(() => {
getMovie(movieId)
.then(({results}) => setReviews([...results]))
.catch(el => console.log(el))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const getMovie = async (moviesId) => {
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const BASE_URL = `https://api.themoviedb.org/3/movie/`
    const movieDetail = await axios.get(` ${BASE_URL}${moviesId}/reviews?api_key=${API_KEY}`)
    return   movieDetail.data
  }



//  запит по акторах
    if(reviews.length <= 0){
      return <h1>We don`t have reviews</h1>
    } else {
      return (<div>
        <ul>
          {reviews.map(({id, author,content}) => (
             <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        <ul>
        </ul>
        <Outlet/>
    </div>)
    }
}

export default Reviews

