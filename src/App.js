import React from 'react';
import './App.css';
import {Routes,Route}  from "react-router-dom";
import BookList from './Components/bookList/bookList';
import Header from './Components/header/header';
import BookDetails from './Components/bookDetails/bookDetails';
import Start from './Components/startReading/start';
import { useSelector } from 'react-redux';
import AddBook from './Components/addBook/addBook';

function App() {
  let bookList = useSelector(state => state.books);
  return (
    <div className="App">
      <h1>BOOK TRACKER APP</h1>
      <AddBook />
      
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/bookDetails/:id' element={<BookDetails />}/>
        <Route path='/start/:id' element={<Start/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
