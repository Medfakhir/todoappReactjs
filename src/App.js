// App.js

import React, {  } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Login from './components/Login';
import Singin from './components/Singin';
import AllTodo from './components/AllTodo';

function App() {


  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/todo' element={ <AllTodo/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Singin />} />
          
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
