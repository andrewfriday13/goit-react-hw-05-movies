import { useEffect, useState } from "react"
import { Link } from "react-router-dom"




const TrendList = ({getTrends}) => {

    const[films, setFlilms] = useState([])
    
    useEffect(() => {
        getTrends()
        .then(({results}) =>setFlilms([...results]))
        .catch(err => console.log(err.message))
        .finally()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div>
            <ul>
            {films.map(({id, title}) =>{
                return(
                    <li key={id}>
                       <Link key={id} to={`${id}`}>{title}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )

}

export default TrendList