import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './addComment.css';


export default function AddComments() {
    let books = useSelector(state => state.books)
    let book = books.map(book => book.Comments)
    const [addcomment, setAddcomment] = useState(book);
    const [comment, setComment] = useState("");
    

    const changeComment = (e) => {
        setComment(e.target.value)
    }
    const AddComment = () => {
        setAddcomment([...addcomment, { id: Math.random(), content: comment }]);
        setComment('')    
    }
    
  return (
      <div className='comments'>
         
        <h6>Share your opinion with your friends about this book : </h6>
          
          {addcomment.map(comment => <div>
              <h5>{comment.content}</h5> 
          </div>)}
          
          <div className='add-comment-bar' >
              <input value={comment} type='text' onChange={changeComment} placeholder='share your opinion here...' />  
              <button onClick={AddComment}>Add</button>
          </div>

      </div>
      
  )
}
