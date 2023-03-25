import { useState, useEffect } from "react"
import axios from 'axios';
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import FormSearch from "components/formSearch/formSearch";


const Movies =()=>{

const[films, setFlilms] = useState([])
const[nameFilm, setNameFilm] = useState('')
const[sendFetch, setSendFetch] =useState(false)
const [searchParams, setSearchParams] = useSearchParams();
const[ emptyList, setEmptyList] =useState(false) 

const search  = searchParams.get("search ") ?? "";


useEffect(() => {
    getFilms(nameFilm)
    .then(({results}) =>   setFlilms([ ...results]))
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
    if(value === '') return setSearchParams({})
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

const location = useLocation()

return <div>
     <FormSearch
     search={search }
      handleSabmit={handleSabmit}
      handleChange={handleChange}
      />

       {  (emptyList && films.length === 0 )&& <p>Please, change your request</p>}
       <ul>
        {films.map(({id, title}) =>
         <li key={id}>
            <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
        </li>)}
       </ul>
       <Outlet/>
    </div>
 }

 export default Movies


