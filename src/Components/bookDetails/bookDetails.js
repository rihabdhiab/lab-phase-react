import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function BookDetails() {
    let bookList=useSelector(state=>state.books)
    let { id } = useParams();
  return (
      <div> BookDetails 
          {bookList.filter(book => book.id == id).map(book =><div key={book.id}><h1>{book.title}</h1>
              <h3>{book.author}</h3>
              <img width='200px' height='300px' src={book.bookPoster} alt='img' />
                  <h5>{book.description}</h5>
          </div>)}

      </div>
  )
}
