const MovieBoxPanel = ({mov, posterPath}) => {

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
        <div className="movieListMain-filmBox" key={mov.id}>
            <h2 className="movieListmain-filmBox-filmTitle">{mov.title || mov.name}</h2>
            <p className="movieListMain-filmBox-filmOverview">{mov.overview}</p>
            <img className="movieListMain-filmBox-img" src={`${posterPath}${mov.poster_path}`} alt="filmPoster"/>
            <button className="movieListMain-filmBox-btn" onClick={() => {handleTrailerButton(mov.id)}}>Watch Trailer</button>

            {/* <a href={`http://api.themoviedb.org/3/movie/${mov.id}/videos?api_key=${apiKey}`}>Watch Trailer</a> */}
        </div>
    );
}
 
export default MovieBoxPanel;