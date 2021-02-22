const MovieBoxPanel = ({mov, posterPath,handleTrailerButton,youTubePath}) => {

    

    return (  
        <div className="movieListMain-filmBox" key={mov.id}>
            <h2 className="movieListmain-filmBox-filmTitle">{mov.title}</h2>
            <p className="movieListMain-filmBox-filmOverview">{mov.overview}</p>
            <img className="movieListMain-filmBox-img" src={`${posterPath}${mov.poster_path}`} alt="filmPoster"/>
            <button className="movieListMain-filmBox-btn" onClick={() => {handleTrailerButton(mov.id)}}>Watch Trailer</button>
            {/* <a href={`http://api.themoviedb.org/3/movie/${mov.id}/videos?api_key=${apiKey}`}>Watch Trailer</a> */}
        </div>
    );
}
 
export default MovieBoxPanel;