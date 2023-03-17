// import { Link } from "react-router-dom"
import TrendsList from "./trendsList"

const Trend =()=>{
    const trends =["oldMan", "Superman", "Time", "Interstellar"]

    return <div>
        <TrendsList trends={trends}/>
        </div>
}

export default Trend

