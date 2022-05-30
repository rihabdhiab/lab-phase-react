import React, { useState } from 'react';


export default function AddComments({ book }) {

    const [comment, setComment] = useState("");
    const [addcomment, setAddcomment] = useState(book.Comments);

    const changeComment = (e) => {
        setComment(e.target.value)
    }
    const AddComment = () => {
        setAddcomment([...addcomment, { id: Math.random(), content: comment }]);
        setComment('')    
    }
    
    
  return (
      <div>
         
          <h5>AddComments</h5>
          
        {addcomment.map(com=>com.content)}
        
        
        
          <div>
              <input value={comment} type='text' onChange={changeComment} placeholder='share your opinion...' />  
              <button onClick={AddComment}>add</button>
              
             
          </div>
          
          
          
      </div>
      
  )
}
