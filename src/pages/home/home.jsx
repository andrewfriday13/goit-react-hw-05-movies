// import { Link } from 'react-router-dom';


const Home =()=>{
    /// тут має бути запит на тренди
    const trends =["oldMan", "Superman", "Time", "Interstellar"]
    
    return <div>
        <h1>Trending tooday</h1>
        <ul>
            {trends.map(trend =>{
                return(
                    <li key={trend}>
                       {trend}
                    </li>
                )
            })}
        </ul>
    </div>
 }

 export default Home