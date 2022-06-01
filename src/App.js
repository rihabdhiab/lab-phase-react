import React from 'react';
import './App.css';
import {Routes,Route}  from "react-router-dom";
import BookList from './Components/bookList/bookList';
import BookDetails from './Components/bookDetails/bookDetails';
import Start from './Components/startReading/startReading';


function App() {
  
 
  
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/bookDetails/:id' element={<BookDetails />}/>
        <Route path='/start/:id' element={<Start/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
