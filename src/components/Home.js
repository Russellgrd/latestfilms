import useFetch from '../customHooks/useFetch';
import MovieList from './MovieList';

const Home = () => {

    const queryString = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
    const { data:movies } = useFetch(queryString+process.env.REACT_APP_THEMOVIEDB_API_KEY);

    return (
        <div className="homeMain">
            <h2>Welcome to the latest films</h2>
            <p>we have the latest film releases, and all the latest exciting film trailers for you</p>
            { movies && <MovieList movies={movies} apiKey={process.env.REACT_APP_THEMOVIEDB_API_KEY} />}
        </div>
      );
}

export default Home;