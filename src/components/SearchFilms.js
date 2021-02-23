import { useState } from 'react';
import MovieBoxPanel from './MovieBoxPanel';
import { Link, useHistory } from 'react-router-dom';

const SearchFilms = () => {
    
    let history = useHistory();
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