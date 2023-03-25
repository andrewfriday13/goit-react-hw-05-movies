import axios from "axios"
import { useEffect, useRef, useState, } from "react"
import { Link, Outlet, useParams, useLocation } from "react-router-dom"


const MovieDetails = () => {

    const[oneMovie, setOneMoivie] = useState({})
    const {movieId} = useParams()
    
    useEffect(()=>{
        getMovie(movieId).then(response => setOneMoivie(response) )
        .catch(err => console.log(err))
        .finally()
    },[movieId])

const getMovie = async (moviesId) => {
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const BASE_URL = `https://api.themoviedb.org/3`
    const movieDetail = await axios.get(`${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}&language=en-US`)
    return   movieDetail.data
}

const {overview, poster_path, original_title, vote_average} = oneMovie
const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
const emptyImg = 'https://www.pays-sud-charente.com/inc/image/img_actualite/defaut.png'

const location = useLocation();
const locationState = location.state?.from ?? '/movies'
const backLink = useRef(locationState)
console.log(location)
console.log(backLink)

    return (<>
        <Link to={backLink.current}><button type="button"> Go back</button> </Link>
        <h1>{original_title}</h1>
        { poster_path === null 
        ? 
        (<img src={emptyImg} alt=""  width='160'/>)
        :
        (<img src={imgUrl} alt=""  width='160'/>)
        }
        <p>рейтинг: {vote_average}</p>
        <div>{overview}</div>
        <ul>
            <li> <Link to="cats">Cats</Link></li>
            <li> <Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
    </>)
}


export default MovieDetails


