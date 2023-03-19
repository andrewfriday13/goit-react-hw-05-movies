import { Link, Outlet } from "react-router-dom"


const TrendMovie = () => {
    return (<div>
        <Link to="/"><button> Go back</button> </Link>
        <div>картинка фільму</div>
        <div>опис і всяка діч</div>
        <ul>
            <li> <Link to="cats">Cats</Link></li>
            <li> <Link to="reviews">Reviews</Link></li>
        </ul>
        <Outlet/>
    </div>)
}

export default TrendMovie