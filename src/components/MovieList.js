import { Link } from 'react-router-dom';
import MovieBoxPanel from './MovieBoxPanel';


const MovieList = ({movies}) => {

    const posterPath = 'https://image.tmdb.org/t/p/w500';
    let youTubePath = "'window.open(`https://www.youtube.com/watch?v=${trailerObject.key}`,'_blank');'";
      
    return ( 
        <div className="movieListMain">
                {movies.results.map((mov) => (
                    <Link className="movieListMainLink" to={`/filmreview/${mov.id}`}><MovieBoxPanel mov={mov} posterPath={posterPath} youTubePath={youTubePath} key={mov.id} /></Link>
                ))}
        </div>
     );
}
 
export default MovieList;