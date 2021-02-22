import { useHistory } from 'react-router-dom';
import MovieBoxPanel from './MovieBoxPanel';

const MovieList = ({movies}) => {

    let history = useHistory();
    const posterPath = 'https://image.tmdb.org/t/p/w500';
    let youTubePath = "'window.open(`https://www.youtube.com/watch?v=${trailerObject.key}`,'_blank');'";

    const handleTrailerButton = (movieId) => {
        fetch(`http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                data.results.forEach((filmObj) => {
                    if(filmObj.type === 'Trailer') {
                        window.open(`https://www.youtube.com/watch?v=${filmObj.key}`,'_blank');
                    }
                })
            }) 
    };       

    return ( 
        <div className="movieListMain">
                {movies.results.map((mov) => (
                    <MovieBoxPanel mov={mov} handleTrailerButton={handleTrailerButton} posterPath={posterPath} youTubePath={youTubePath} />
                ))}
        </div>
     );
}
 
export default MovieList;