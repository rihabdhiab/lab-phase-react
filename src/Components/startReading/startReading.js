import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReadingProgress from '../ReadingProgress/readingProgress';
import './startReading.css';


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
    <div className='startReading'>
      <h2 className='timer'> <span className='hours'>{hours < 10 ? "0" + hours : hours}</span>:
        <span className='minutes'>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span className='seconds'>{seconds < 10 ? "0" + seconds : seconds}</span></h2>
      <div>
      <button className='start-button' style={{backgroundColor: isActive ? 'green':' rgb(133, 133, 233)'}} onClick={toggle}>{isActive ? 'Take a break' : 'Start'}</button>
      <button className='reset-button' onClick={reset}>Reset</button>
      </div>
      {bookList.filter(book => book.id == id).map(book => <div key={book.id}><ReadingProgress key={book.id} book={book} />
     
        
      </div>
      )}

    </div>
  )
}

      
     
  
