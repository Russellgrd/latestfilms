import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const FilmReviewTile = () => {
    let [ filmReview, setFilmReview ] = useState(null)
    const { id } = useParams();
  
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d62fc006c3906e85bfd56ccb79e6e0f1&language=en-US&page=1`)
            .then(data =>  data.json())
            .then((res) => {
                setFilmReview(res.results);
            })
    },[id]) 

    return ( 
        <div className="filmReviewTile-main">
            <h2>Film Review </h2>
            {filmReview &&  
                <div className="filmReviewTile">

                    <h2>{filmReview[0] ? `Review Author: ${filmReview[0].author}` :  "This film has not yet been reviewed"}</h2>
                    <p>{filmReview[0]  ? filmReview[0].content : "This film has not yet been reviewed"}</p>
                    {/* <h2>{filmReview[0].author || "This film has not yet been reviewed"}</h2>
                    <p>{filmReview[0].content || "This film has not yet been reviewed"}</p> */}
                </div> }
        </div>
     );
}
 
export default FilmReviewTile;
