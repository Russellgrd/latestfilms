import useFetch from '../customHooks/useFetch';
import MovieList from './MovieList';

const Home = () => {

    const queryString = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
    const apiKey = 'd62fc006c3906e85bfd56ccb79e6e0f1';
    const { data:movies } = useFetch(queryString+apiKey);


    return (
        <div className="homeMain">
            <h2>Welcome to the latest films</h2>
            <p>we have the latest film releases, and all the latest exciting film trailers for you</p>
            { movies && <MovieList movies={movies} apiKey={apiKey} />}
        </div>
      );
}

export default Home;