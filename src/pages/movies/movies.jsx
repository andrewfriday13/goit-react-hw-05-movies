import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


const Movies =()=>{
const[films, setFlilms] = useState([])
const[nameFilm, setNameFilm] = useState('')

useEffect(() => {
    getFilms(nameFilm)
    .then(({results}) =>  {console.log(results); setFlilms([...results])})
    .catch(err => console.log(err.message))
    .finally()
}, [nameFilm])

const getFilms = async (search) =>{ 
    const API_KEY = '7140726491bb46cefd66d6c99674ef87'
    const getFilms = await 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)

    return getFilms.data 
}
    const handleChange = ({target}) => {
        console.log(target.value)
        const { value} =target
        setNameFilm(value)
    }

    const handleSabmit = event =>{
        event.preventDefault()
        getFilms(event.target)
        document.querySelector('input').value = '';
        console.log(event.currentTarget)

    }

    return <div>
       <form onSubmit={handleSabmit}>
        <label>
            <input 
             type="text"
             onChange={handleChange}
             autoComplete="off"
             autoFocus
             name="search"
             placeholder="Search movies"
            />
            <button type="submit"> search</button>
        </label>
       </form>
       <ul>
        {films.map(({id, title}) => <li key={id}>
            <Link to={`${title}`}>{title}</Link>
        </li>)}
       </ul>
    </div>
 }

 export default Movies

//  https://api.themoviedb.org/3/search/movie?api_key=7140726491bb46cefd66d6c99674ef87&query=batman&page=1
