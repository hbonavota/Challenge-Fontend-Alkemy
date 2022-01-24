import React from 'react';
import './Home.css'
import logo from '../../logo.svg';

function Home() {
  return (
    <div className='homebk'>

        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <h1>Hello Word</h1>
        </a>
      </header>
    </div>
    </div>
  );
}

export default Home;
