import React from 'react';
import { useDispatch} from 'react-redux';
import { Link} from 'react-router-dom';
import { isCurrentlyRead,wantToRead,isRead } from '../../Redux/Actions/actions';
import './bookCard.css';



export default function BookCard({ book}) {
  
  let dispatch = useDispatch(); 
  
  const handleClick1 = () => {
    dispatch(isCurrentlyRead(book.id))
  }
  const handleClick2 = () => {
    dispatch(wantToRead(book.id))
  }
  const handleClick3 = () => {
    dispatch(isRead(book.id))
  }

    
  return (
    <div className='book-card'>
          <Link to={`/bookDetails/${book.id}`}><h1>{book.title}</h1></Link>
          <img width='200px' height='300px' src={book.bookPoster} alt='img' />
          <button  style={{ backgroundColor: book.currentlyRead ? 'rgb(6, 100, 48)' : 'rgb(223, 53, 53)' }} onClick={handleClick1}>currently read</button>
          <button  style={{ backgroundColor: book.wantToRead ? 'rgb(6, 100, 48)' : 'rgb(223, 53, 53)' }} onClick={handleClick2} >want to read</button>
          <button style={{ backgroundColor: book.read ? 'rgb(6, 100, 48)' : 'rgb(223, 53, 53)' }} onClick={handleClick3 }>read</button>
          <Link to={`/start/${book.id}`}><button>start reading </button> </Link>

    </div>
      
  )
}
