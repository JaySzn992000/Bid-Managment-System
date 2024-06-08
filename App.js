import React from 'react';
import './App.css';
import Bidapp from './bidapp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subquoation from './subquotation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Bidapp/>}/>
          <Route path='/Subquoation' element={<Subquoation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
