import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddComments from '../addComment/AddComments';
import ReadingProgress from '../ReadingProgress/readingProgress';


export default function Start() {
  
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
 
 
  let bookList = useSelector(state => state.books);
  
  
  let { id } = useParams();
  const toggle = () => {
    setIsActive(!isActive)
  }
  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false)
  }
  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
          if (minutes === 59) {
            setHours(hours + 1)
            setMinutes(0);
            setSeconds(0)
          }
          } 
        
      }, 1000);
    } else if (!isActive) {
      clearInterval(timer)
      }  
  return () => clearInterval(timer)
  });


  return (
    <div>
      <h4>Start reading</h4>
      {bookList.filter(book => book.id == id).map(book =><div key={book.id}><ReadingProgress key={book.id} book={book} />
      <h2>{hours<10?"0"+hours:hours}:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h2>
        <button onClick={toggle}>{isActive ? 'Take a break' : 'start'}</button>
        <button onClick={reset}>reset</button>
        <AddComments  book={book}/> 
      </div>
      )}
      
      
      
        
     
        
        
       
      

    </div>
  )
}

      
     
  
