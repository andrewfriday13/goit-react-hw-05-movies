// import css from '../cardFilm/style.module.css'

// import { Link } from 'react-router-dom';



// const CardFilm = ({films, location}) => {

//   const emptyPoster = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'
// console.log(films)
//     return(
//         <ul className={css.trendList}>
//         {films.map(({ id, title, poster_path }) => (
//           <li key={id}>
//             <Link className={css.trendItem} to={`/movies/${id}`} state={{ from: location }}>
//                 {poster_path !== null ? (
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${poster_path}`}
//                     alt={`Poster ${title}`}
//                     width="250px"
//                     height="375px"
//                   />
//                 ) : (
//                   <img
//                     src={emptyPoster}
//                     alt={`Poster ${title}`}
//                     width="250px"
//                     height="375px"/>
//                 )}
//                 <span>{title}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     )
// }

// export default CardFilm