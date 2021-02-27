import { useState, useEffect } from 'react';

const PublicComents = () => {

    let [ comment, setComment ] = useState(null);
    let [ name, setName ] = useState(null);
    let [ fullCommentList, setCommentList ] = useState(null);

    useEffect(() => {
        fetch(' https://latestfilms.herokuapp.com/')
            .then(data => data.json())
            .then((res) => {
                setCommentList(res);
                console.log(res);
            })
        },[])

    let handleCommentSubmitButton = (e) => {
        e.preventDefault();
        let newCommentObject = {name:name,comment:comment};
        let jsonString = JSON.stringify(newCommentObject);

        fetch(' https://latestfilms.herokuapp.com/', {
            method: 'POST',
            body: jsonString,
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.json())
            .then((data) => {
                setCommentList(data);
            });
        }

    let handleCommentChange = (e) => {
        setComment(e.target.value);
    }

    let handleNameChange = (e) => {
        setName(e.target.value);
    }

 

    return ( 
        <div className="publicCommentsMain">
            <h2>public comments</h2>
            <form>
                <label>name</label>
                <input type="text" onChange={(e) => {handleNameChange(e)}}/>
                <label>Add a comment</label>
                <input onChange={(e) => {handleCommentChange(e)}} type="text"/>
                <button onClick={(e) => {handleCommentSubmitButton(e)}}>submit</button>
            </form>
            { fullCommentList && fullCommentList.map((el) => (
                <div className="publicCommentsMainBox" key={el._id}>
                    <p className="publicCommentsMainBox-name">Name: {el.name}</p>
                    <p className="publicCommentsMainBox-comment">Comment: {el.comment}</p>
                    <p className="publicCommentsMainBox-date">Comment date: {Date(`${el.createdAt}`)}</p>
                </div>
            ))}
        </div>
     );
}
 
export default PublicComents;