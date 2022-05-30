import React, { useState } from "react";
import Progressbar from 'react-js-progressbar';


export default function ReadingProgress({book}) {
    const [numberOfPagesRead, setNumberOfPagesRead] = useState();
    const [remainingPages, setRemainingPages] = useState();
    const [percentage, setPercentage] = useState(0);
    const [msg,setMsg]=useState('')

   
    const handleClick = () => {
        setRemainingPages(book.pages - numberOfPagesRead); 
        setPercentage((numberOfPagesRead / book.pages) * 100);
        if(numberOfPagesRead>1){
        setMsg('good job keep going')}
    }

    
   
  return (
      <div >reading progress
      <div key={book.id}>
        <h5>title : {book.title}</h5>
        <h6>Total Number Of Pages : {book.pages}</h6>
      <div>
          <h6>Number of pages you read today</h6>
          <input onChange={(e) => { setNumberOfPagesRead(e.target.value) }} />
          <button onClick={handleClick} >Enter</button>
      </div> 
      
      <p>Remaining Pages: {remainingPages} </p>
          <Progressbar
            animateText={true}
            clockwise={true}
            size={15*10}
            input={percentage}
            pathWidth={10}
            pathColor={['#56ab2f', '#a8e063']} // use an array for gradient color.
            trailWidth={20}
            trailColor='#363636' // use a string for solid color.
            textStyle={{ fill: 'red' }} // middle text style
            />
        <h4>{msg}</h4>
        
      </div>
    </div>
  )
}
