import { useSelector } from "react-redux";
import React, { useState } from 'react';
import BookCard from "../bookCard/bookCard";
import './bookList.css';



export default function BookList() {
    let bookList = useSelector(state => state.books)
    const [list, setList] = useState('');
    const [search, setSearch] = useState("");
    const filteredBooks=bookList.filter(book=>book.title.toLowerCase().includes(search.toLowerCase()))
    
  return (
      <div className="book-list">
          <div>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => setList('filtered books')}>search</button>                 
          </div>
           
         
          <div>
              
              <button onClick={()=>setList('want to read')}>Want To Read</button>
              <button onClick={()=>setList('currently read')}>Currently Reading</button>
              <button onClick={()=>setList('read')}>Read</button>
              <button onClick={() => setList('all books')}>All Books</button>
              <button onClick={() => setList('filtered books')}>search</button>
          </div>

          {list === 'want to read' ? bookList.filter(book => book.wantToRead === true).map(book => <BookCard key={book.id} book={book} />) :
           list === 'currently read' ? bookList.filter(book => book.currentlyRead === true).map(book => <BookCard key={book.id} book={book} />):
           list === 'read' ? bookList.filter(book => book.read === true).map(book => <BookCard key={book.id} book={book} />) :
           list==='filtered books'? filteredBooks.map(book=><BookCard key={book.id} book={book} />):
           bookList.map(book => <BookCard key={book.id} book={book} />)   
          }
          
         
      </ div>
  )
}
