import { Link } from "react-router-dom";

const TrendsList = ({trends}) => {
return   <ul>
{trends.map(trend =>{
    return(
        <li key={trend}>
           <Link key={trend} to={`${trend}`} >{trend}</Link>
        </li>
    )
})}
</ul> 
}

export default TrendsList