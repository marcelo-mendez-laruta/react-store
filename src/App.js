import './App.scss';
import NavBar from './components/NavBar';
import React from 'react';
import { Container } from 'react-bootstrap';
import ItemListContainer from './components/store/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/store/itemDetail';
import StoreContextProvider from "./context/StoreContext";
import MyOrders from './components/store/MyOrders';
import AuthContextProvider from './context/AuthContext';
import Checkout from './components/store/Checkout';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <StoreContextProvider>
          <Container fluid>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer WelcomeMessage={"Hola Bienvenidos a React Store"} isCategory={false} />} />
                <Route path="/categoria/:categoria" element={<ItemListContainer WelcomeMessage={"Hola Bienvenidos a React Store"} isCategory={true} />} />
                <Route path="/producto/:productId" element={<ItemDetail />} />
                <Route path="/carrito" element={<Checkout />} />
                <Route path="/mis-compras" element={<MyOrders />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </StoreContextProvider>
      </AuthContextProvider>
    </div>
  );
}
export default App;
