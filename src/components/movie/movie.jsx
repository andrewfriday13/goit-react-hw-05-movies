import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"


const Movie = () => {

    const[oneMovie, setOneMoivie] = useState({})
    const {trendId} = useParams()
    
    useEffect(()=>{
        getMovie(trendId).then(response => setOneMoivie(response))
        .catch(err => console.log(err))
        .finally()
    },[trendId])

    const getMovie = async (moviesId) => {
        const API_KEY = '7140726491bb46cefd66d6c99674ef87'
        const BASE_URL = `https://api.themoviedb.org/3`
        const movieDetail = await axios.get(`${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}&language=en-US`)
        return   movieDetail.data
      }

      const {overview, poster_path, original_title, vote_average} = oneMovie
      console.log(oneMovie)
      const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
      const emptyImg = 'https://www.pays-sud-charente.com/inc/image/img_actualite/defaut.png'

    return (<>
        <Link to="/"><button> Go back</button> </Link>
        <h1>{original_title}</h1>
        { poster_path === null?(<img src={emptyImg} alt=""  width='160'/>):
        (<img src={imgUrl} alt=""  width='160'/>)}
        <p>рейтинг: {vote_average}</p>
        <div>{overview}</div>
        <ul>
            <li> <Link to="cats">Cats</Link></li>
            <li> <Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
    </>)
}


export default Movie


