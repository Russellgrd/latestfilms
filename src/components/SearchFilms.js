import { useState } from 'react';
import MovieBoxPanel from './MovieBoxPanel';
import { Link } from 'react-router-dom';

const SearchFilms = () => {


    let [ filmName,setFilmName ] = useState(null); 
    let [ filmArrayList, setFilmArrayList ] = useState(null);
    const posterPath = 'https://image.tmdb.org/t/p/w500';

    let handleFilmSearchClick = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key="d62fc006c3906e85bfd56ccb79e6e0f1"&language=en-US&query=${filmName}&page=1`)
            .then((data) => {
                return data.json()
            })
            .then((filmListResults) => {
                setFilmArrayList(filmListResults.results);
            })
    }

    let handleFilmSearchName = (e) =>{
        setFilmName(e.target.value);
    }  

    return ( 
        <div className="searchFilmsMain">
            <h2>Search films</h2>
            <form>
                <label>Enter Film Name</label>
                <input onChange={(e) => {handleFilmSearchName(e)}} type="text"/>
                <button onClick={(e) => {handleFilmSearchClick(e)}}>Search...</button>
            </form>
            { filmArrayList && filmArrayList.map((item) => (
                <Link to={`/filmreview/${item.id}`}><MovieBoxPanel mov={item} key={item.id} posterPath={posterPath} /></Link>
            ))}
        </div>
     );
}
 
export default SearchFilms;