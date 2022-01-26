import React from 'react';
import './Home.css'
import logo from '../../logo.svg';
import NavbarHome from '../NavbarHome/NavbarHome'
import Container from 'react-bootstrap/Container';


function Home() {
  return (
    <div className='homebk'>
        <NavbarHome/>
      <header className="App-header">
        <Container className="p-3">
                <h1 class="display-4 fw-bold">Welcome </h1>
                <img src={logo} className="App-logo" alt="logo" />
        </Container>
      </header>
    </div>
  );
}

export default Home;
