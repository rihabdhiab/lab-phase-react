import { useSelector } from "react-redux";
import React, { useState } from 'react';
import BookCard from "../bookCard/bookCard";
import './bookList.css';
import AddBook from "../addBook/addBook";




export default function BookList() {
    let bookList = useSelector(state => state.books)
    const [list, setList] = useState('');
    const [search, setSearch] = useState("");
    const filteredBooks=bookList.filter(book=>book.title.toLowerCase().includes(search.toLowerCase()))
    
  return (
      <div className="book-list-box">
       <div className="header">
         <div className="search-bar">
             <input type='text' value={search} placeholder='search book...' onChange={(e) => setSearch(e.target.value)} /> 
          <AddBook />
        </div>
        </div>
         <div className="buttons">              
              <button onClick={()=>setList('want to read')}>Want To Read</button>
              <button onClick={()=>setList('currently read')}>Currently Reading</button>
              <button onClick={()=>setList('read')}>Read</button>
              <button onClick={() => setList('all books')}>All Books</button>
         </div>
      
      
          <div className="list-of-books">
             {list === 'want to read' ? bookList.filter(book => book.wantToRead === true).map(book => <BookCard key={book.id} book={book} />) :
             list === 'currently read' ? bookList.filter(book => book.currentlyRead === true).map(book => <BookCard key={book.id} book={book} />):
             list === 'read' ? bookList.filter(book => book.read === true).map(book => <BookCard key={book.id} book={book} />) :
             filteredBooks.map(book => <BookCard key={book.id} book={book} />)   
             }
        </div>
          
         
     
      </div>
  )
}
