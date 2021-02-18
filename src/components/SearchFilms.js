import { useState, useEffect } from 'react';
import useFetch from '../customHooks/useFetch';




const SearchFilms = () => {
    const queryString = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const apiKey = 'd62fc006c3906e85bfd56ccb79e6e0f1';
    const [filmName, setFilmName] = useState('');
    const [filmResults, setFilmResults] = useState(null);
    const poster_path = 'https://image.tmdb.org/t/p/w500';
    

    const handleFilmSearch = async (e) => {
        e.preventDefault();
        console.log(filmName);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${filmName}`)
            .then((data) => data.json())
            .then((res) => {
                setFilmResults(res.results);
                console.log(res.results);
            });
    };

    return ( 
        <div className="searchFilmsMain">
            <h2>Search Films</h2>
            <form onSubmit={(e) => {handleFilmSearch(e)}} className="searchFilmsMain-formBox">
                <label className="searchFilmsMain-formBox__label">Search Films</label>
                <input onChange={(e) => {setFilmName(e.target.value)}}  type="text"/>
                <button className="searchFilmsMain-formBox__button">Search</button>
            </form>
                {filmResults && <div className="searchFilmsMain-resultsBox">
                    {filmResults.map((filmItem) => (
                        <div className="searchFilmsMain-resultsBox--item">
                            <h2>{filmItem.title}</h2>
                            <p>{filmItem.overview}</p>
                            <img src={poster_path+filmItem.poster_path} alt=""/>
                        </div>))}    
                </div>}
        </div>
     );
}
 
export default SearchFilms;