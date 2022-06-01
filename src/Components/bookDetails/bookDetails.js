import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './bookDetails.css';


export default function BookDetails() {
    let bookList=useSelector(state=>state.books)
    let { id } = useParams();
  return (
      <div className='bookDetails'>
          {bookList.filter(book => book.id == id).map(book => <div key={book.id}>
              <h1 className='bookTitle'>{book.title}</h1>
              <img className='bookPoster'  src={book.bookPoster} alt='img' />
              <h4 className='bookAuthor' > <span style={{ fontWeight: 'bold' }}> Written by :</span> {book.author}</h4>
              <h5> <span  style={{fontWeight:'bold'}} > Number of pages : </span> { book.pages} </h5>
              <h4 style={{fontWeight:'bold'}}>Book description : </h4>
              <h5 className='book-description'>{book.description}</h5>
          </div>)}

      </div>
  )
}
