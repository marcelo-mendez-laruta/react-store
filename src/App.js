import './App.scss';
import NavBar from './components/NavBar';
import React from 'react';
import { Container } from 'react-bootstrap';
import ItemListContainer from './components/store/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/store/itemDetail';

function App() {
  
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer WelcomeMessage={"Hola Bienvenidos a React Store"}  isCategory={false}/>} />
            <Route path="/categoria/:categoria" element={<ItemListContainer WelcomeMessage={"Hola Bienvenidos a React Store"}  isCategory={true}/>} />
            <Route path="/producto/:productId" element={<ItemDetail />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
