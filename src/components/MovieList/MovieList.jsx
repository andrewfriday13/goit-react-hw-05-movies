import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <div>
              {/* {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={`Poster ${title}`}
                  width="250px"
                  height="375px"
                />
              ) : (
                <span>No poster</span>
              )} */}
              <b>{title}</b>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
