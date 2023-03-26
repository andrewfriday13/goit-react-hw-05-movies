import axios from "axios"
import { useEffect, useRef, useState, } from "react"
import { Link, Outlet, useParams, useLocation } from "react-router-dom"
import css from './stylePages.module.css'



const MovieDetails = () => {

    const[oneMovie, setOneMoivie] = useState({})
    const {movieId} = useParams()
    useEffect(()=>{
        getMovie(movieId).then(response =>{ setOneMoivie(response)} )
        .catch(err => console.log(err))
        .finally()

    },[movieId])

const getMovie = async (moviesId) => {
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const BASE_URL = `https://api.themoviedb.org/3`
    const movieDetail = await axios.get(`${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}&language=en-US`)
    return   movieDetail.data
}

const {overview, poster_path, genres, original_title, vote_average, release_date} = oneMovie

const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
const emptyImg = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'

const location = useLocation();
const locationState = location.state?.from ?? '/movies'
const backLink = useRef(locationState)
const rating = (vote_average/10*100).toFixed(0)
const release = release_date


    return <div className={css.details}>
        <Link to={backLink.current}>
            <button 
            className={css.btnBack}
            type="button">
                 Go back</button>
        </Link>

       <div className={css.allOverview}>
       { poster_path === undefined 
       ? (<img src={emptyImg} alt=""  width='340'/>)
       : (<img src={imgUrl} alt=""  width='340'/>)}

       <div className={css.overview}>
       <span className={css.titleMovie}>{original_title} ({release?.slice(0, 4)})</span>
        <span>Rating: {rating}%</span>

        {genres === undefined 
        ? (<span>No genres</span>) 
        : (<span>{genres.map(({ name }) => name).join(', ')}</span>)}
        <span>{overview}</span>
        <ul className={css.listCatsReviews}>
            <li> 
                <Link className={css.catsReviews} to="cats">Cats</Link></li>
            <li> 
                <Link className={css.catsReviews} to="reviews">Reviews</Link></li>
        </ul>
       </div>
       </div>
        <Outlet/>
        </div>
    
}


export default MovieDetails


