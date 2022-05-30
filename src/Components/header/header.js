import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../addBook/addBook';
import BookCard from '../bookCard/bookCard';
import './header.css'

export default function Header() {
  let books = useSelector(state => state.books);
  const [search, setSearch] = useState("");
  return (
    <div className='header'>
      <div className='search'>
        
        {/*<AddBook />
        {books.filter(book => book.title.toLowerCase().includes(search.toLowerCase())).map(book => <BookCard />)}*/}
      </div>   
    </div>
  )
}
