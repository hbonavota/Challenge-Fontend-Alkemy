import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Error/Error.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/*' element={<Error/>}></Route>
          <Route path='/' element={<Home />} > </Route>
        </Routes>
    </div>
  );
}

export default App;
