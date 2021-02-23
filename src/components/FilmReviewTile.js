import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';


const FilmReviewTile = () => {
    let history = useHistory();
    let [ filmReview, setFilmReview ] = useState(null)
    const { id } = useParams();
    console.log('this is the id' + id);
  
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=en-US&page=1`)
            .then(data =>  data.json())
            .then((res) => {
                setFilmReview(res.results);
                console.log(res.results);
            })
    },[]) 

    const handleBackButton = () => {
        history.go(-1);
    }

    return ( 
        <div className="filmReviewTile-main">
            <h2>Film Review </h2>
            {filmReview &&  
                <div className="filmReviewTile">

                    <h2>{filmReview[0] ? `Review Author: ${filmReview[0].author}` :  "This film has not yet been reviewed"}</h2>
                    <p>{filmReview[0]  ? filmReview[0].content : "This film has not yet been reviewed"}</p>
                        <button onClick={handleBackButton}>Back</button>
                    {/* <h2>{filmReview[0].author || "This film has not yet been reviewed"}</h2>
                    <p>{filmReview[0].content || "This film has not yet been reviewed"}</p> */}
                </div> }
        </div>
     );
}
 
export default FilmReviewTile;
