import Home from './pages/Home';
import Main from './pages/Main';
import './css/app.css';
import Navbar from './pages/Navbar';
import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
return (
  <div>
    <Navbar />
  <Home />
  <Main />
  <Button />

  </div>
)
}

export default App;
