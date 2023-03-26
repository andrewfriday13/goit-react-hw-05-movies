import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './style.module.css'



const MovieList = ({ films }) => {
  const location = useLocation();
  const emptyPoster = 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png?20170513175923'

  return (
    <ul className={css.trendList}>
      {films.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link className={css.trendItem} to={`/movies/${id}`} state={{ from: location }}>
              {poster_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={`Poster ${title}`}
                  width="250px"
                  height="375px"
                />
              ) : (
                <img
                  src={emptyPoster}
                  alt={`Poster ${title}`}
                  width="250px"
                  height="375px"/>
              )}
              <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
