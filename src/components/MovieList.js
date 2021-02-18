import { useHistory } from 'react-router-dom';

const MovieList = ({movies,apiKey}) => {

    let history = useHistory();
    const posterPath = 'https://image.tmdb.org/t/p/w500';
    let youTubePath = "'window.open(`https://www.youtube.com/watch?v=${trailerObject.key}`,'_blank');'";

    const handleTrailerButton = (movieId) => {
        fetch(`http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`)
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
                <div className="movieListMain-filmBox" key={mov.id}>
                    <h2 className="movieListmain-filmBox-filmTitle">{mov.title}</h2>
                    <p className="movieListMain-filmBox-filmOverview">{mov.overview}</p>
                    <img className="movieListMain-filmBox-img" src={`${posterPath}${mov.poster_path}`} alt="filmPoster"/>
                    <button className="movieListMain-filmBox-btn" onClick={() => {handleTrailerButton(mov.id)}}>Watch Trailer</button>
                    {/* <a href={`http://api.themoviedb.org/3/movie/${mov.id}/videos?api_key=${apiKey}`}>Watch Trailer</a> */}
                </div>
                ))}
        </div>
     );
}
 
export default MovieList;