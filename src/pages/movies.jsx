import { useState, useEffect } from "react"
import axios from 'axios';
import { Link, Outlet, useSearchParams } from "react-router-dom";


const Movies =()=>{
const[films, setFlilms] = useState([])
const[nameFilm, setNameFilm] = useState('')
const[sendFetch, setSendFetch] =useState(false)
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query") ?? "";




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
        setSearchParams({ query: target.value })
}

const handleSabmit = event =>{
        event.preventDefault()
        getFilms(event.target)
        document.querySelector('input').value = '';
        setSendFetch(!sendFetch)

}


return <div>
       <form onSubmit={handleSabmit}>
        <label>
            <input 
             type="text"
             onChange={handleChange}
             autoComplete="off"
             autoFocus
             name={query}
             placeholder="Search movies"
            />
            <button type="submit"> search</button>
        </label>
       </form>
       {films.length ===0 ?(<p>нема</p>) :(<ul>
        {films.map(({id, title}) =>
         <li key={id}>
            <Link  to={`/${id}`}>{title}</Link>
        </li>)}
       </ul>)}
       <Outlet/>
    </div>
 }

 export default Movies

