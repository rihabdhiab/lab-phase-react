import React, { useState } from "react";
import Progressbar from 'react-js-progressbar';
import AddComments from "../addComment/AddComments";
import './readingProgress.css';


export default function ReadingProgress({book}) {
    const [numberOfPagesRead, setNumberOfPagesRead] = useState();
    const [remainingPages, setRemainingPages] = useState();
    const [percentage, setPercentage] = useState(0);
    const [msg, setMsg] = useState('');
  

   
  const handleClick = () => {
       setRemainingPages(book.pages - numberOfPagesRead); 
        setPercentage((numberOfPagesRead / book.pages) * 100);
        if(numberOfPagesRead<10){
          setMsg('You can read more')
        }
       else if(numberOfPagesRead>10){
         setMsg('Good job keep going')}
       }

    
   
  return (
      <div className="readingProgress">
      <div key={book.id}>
        <h3 className="book-title"> {book.title} </h3>
        <h6 style={{textAlign:'left'}}> <span style={{fontWeight:'bold'}}>Total Number Of Pages : </span>{book.pages}</h6>
      <div className="pages-read-bar">
          <h6 style={{fontWeight:'bold'}}>Number of pages you read today : </h6>
          <input onChange={(e) => { setNumberOfPagesRead(e.target.value) }} />
          <button onClick={handleClick} >Enter</button>
      </div> 
      <h6 style={{fontWeight:'bold',textAlign:'left', marginBottom:'20px'}}>Remaining Pages: {remainingPages} </h6>
      </div>   
      <Progressbar
            animateText={true}
            clockwise={true}
            size={15*10}
            input={percentage}
            pathWidth={20}
            pathColor={['green','green']} 
            trailWidth={19}
            trailColor='grey' 
            textStyle={{ fill: 'green' }} 
      />
 
      <h4 style={{color:'green'}}>{msg}</h4>
      <AddComments/>
        
      
    </div>
  )
}
