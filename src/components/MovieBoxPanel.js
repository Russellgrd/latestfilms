import {    useParams, Link, useHistory } from 'react-router-dom';

const MovieBoxPanel = ({mov, posterPath}) => {

    let { id } = useParams();
    let history = useHistory();
    console.log(id);

    const handleTrailerButton = (movieId,e) => {
        let trailerArray = [];
        fetch(`http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&append_to_response=videos`)
        .then(data => data.json())
        .then((res) => {
            console.log(res);
            if(res.results.length > 0) {
                res.results.map((el) => {
                    if(el.type === 'Trailer') {
                        trailerArray.push(el.key);
                    }
                
                })   
            }
            if(trailerArray.length > 0) {
                window.open(`https://www.youtube.com/watch?v=${trailerArray[0]}`); 
            } else if(trailerArray.length == 0) {
                let currentButton = e.target;
                console.log(currentButton);
                currentButton.textContent = 'Sorry no trailer available';
            }
        })
    };


    return (  
        <div className="movieListMain-filmBox" key={mov.id}>
            <h2 className="movieListmain-filmBox-filmTitle">{mov.title || mov.name}</h2>
            <p className="movieListMain-filmBox-filmOverview">{mov.overview}</p>
            <img className="movieListMain-filmBox-img" src={`${posterPath}${mov.poster_path}`} alt="filmPoster"/>
            <button className="movieListMain-filmBox-btn" onClick={(e) => {handleTrailerButton(mov.id,e)}}>Watch Trailer</button>
                <p className="noTrailerDiv"></p>
            <Link className="movieListMainLink" to={`/filmreview/${mov.id}`}>Movie Review</Link>

        </div>
    );
}
 
export default MovieBoxPanel;