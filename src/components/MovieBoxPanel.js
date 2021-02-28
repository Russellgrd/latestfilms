import {    useParams } from 'react-router-dom';

const MovieBoxPanel = ({mov, posterPath}) => {

    let { id } = useParams();
    console.log(id);

    const handleTrailerButton = (movieId,e) => {
        let trailerArray = [];
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d62fc006c3906e85bfd56ccb79e6e0f1&append_to_response=videos`)
        .then(data => data.json())
        .then((res) => {
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
                currentButton.textContent = 'Sorry no trailer available';
            }
        })
    };

    const handleMovieReview = (m,e) => {
        e.preventDefault();
        window.open(`/filmreview/${m.id}`,`_blank`);
    }

    return (  
        <div className="movieListMain-filmBox" key={mov.id}>
            <h2 className="movieListmain-filmBox-filmTitle">{mov.title || mov.name}</h2>
            <p className="movieListMain-filmBox-filmOverview">{mov.overview}</p>
            {<img className="movieListMain-filmBox-img" src={`${posterPath}${mov.poster_path}`} alt="filmPoster"/>}
            <button className="movieListMain-filmBox-btn" onClick={(e) => {handleTrailerButton(mov.id,e)}}>Watch Trailer</button>
                <p className="noTrailerDiv"></p>
            <button className="movieListMain-filmBox-btn" onClick={(e) => {handleMovieReview(mov,e)}}>Movie Review</button>

        </div>
    );
}
 
export default MovieBoxPanel;