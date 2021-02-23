import useFetch from '../customHooks/useFetch';
import MovieList from './MovieList';

const Home = () => {

    const queryString = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
    const { data:movies } = useFetch(queryString+process.env.REACT_APP_THEMOVIEDB_API_KEY);

    return (
        <div className="homeMain">
            <h2 className="homeMain-Header">Welcome to the latest films</h2>
            <h2 className="homeMain-slogan">We have the latest film releases, and all the latest exciting film trailers for you</h2>
            { movies && <MovieList movies={movies} apiKey={process.env.REACT_APP_THEMOVIEDB_API_KEY} />}
        </div>
      );
}

export default Home;