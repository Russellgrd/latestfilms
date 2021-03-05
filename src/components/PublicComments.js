import { useState, useEffect } from 'react';

const PublicComents = () => {

    let [ comment, setComment ] = useState(null);
    let [ name, setName ] = useState(null);
    let [ fullCommentList, setCommentList ] = useState(null);
    let [ loading, setLoading ] = useState('');
    let [ feedback, setFeedback ] = useState('');

    useEffect(() => {
        fetch(' https://latestfilms.herokuapp.com/')
            .then(data => data.json())
            .then((res) => {
                setCommentList(res);
            })
        },[])

    let handleCommentSubmitButton = (e) => {
        e.preventDefault();
        if(typeof name == 'string' && name.length > 3 && typeof comment == 'string' && comment.length > 10 ) {
            let newCommentObject = {name:name,comment:comment};
            let jsonString = JSON.stringify(newCommentObject);
            setLoading('Adding comment.....')

            fetch('https://latestfilms.herokuapp.com/', {
                method: 'POST',
                body: jsonString,
                headers: {
                    'Content-Type': 'application/json'
                }
                })
                .then(res => res.json())
                .then((data) => {
                    setCommentList(data);
                    setLoading('');
                    setFeedback('');
                });
        } else {
            setFeedback('Name should be more than 3 characters, and comment greater than 10 characters. These cannot be numbers');
        }
       
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
                <p className="formFeedback">{feedback}</p>
                <p className="isLoading">{loading}</p>
            </form>
            { fullCommentList && fullCommentList.map((el) => (
                <div className="publicCommentsMainBox" key={el._id}>
                    <p className="publicCommentsMainBox-name">Name: {el.name}</p>
                    <p className="publicCommentsMainBox-comment">Comment: {el.comment}</p>
                    <p className="publicCommentsMainBox-date">Comment date: {el.createdAt}</p>
                </div>
            ))}
        </div>
     );
}
 
export default PublicComents;