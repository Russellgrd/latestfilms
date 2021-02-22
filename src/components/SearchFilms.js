import { useState } from 'react';
import MovieBoxPanel from './MovieBoxPanel';

const SearchFilms = () => {
    
    let [ filmName,setFilmName ] = useState(null); 
    let [ filmArrayList, setFilmArrayList ] = useState(null);
    const posterPath = 'https://image.tmdb.org/t/p/w500';

    let handleFilmSearchClick = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_THEMOVIEDB_URL}${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=en-US&query=${filmName}&page=1`)
            .then((data) => {
                return data.json()
            })
            .then((filmListResults) => {
                setFilmArrayList(filmListResults.results);
                console.log(filmArrayList)
            })
    }

    let handleFilmSearchName = (e) =>{
        setFilmName(e.target.value);
    }

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
        <div className="searchFilmsMain">
            <h2>search films component</h2>
            <form>
                <label>Enter Film Name</label>
                <input onChange={(e) => {handleFilmSearchName(e)}} type="text"/>
                <button onClick={(e) => {handleFilmSearchClick(e)}}>Search...</button>
            </form>
            { filmArrayList && filmArrayList.map((item) => (
                <MovieBoxPanel mov={item} key={item.id} posterPath={posterPath} handleTrailerButton={handleTrailerButton}/>
            ))}
        </div>
     );
}
 
export default SearchFilms;