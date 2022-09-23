import './App.scss';
import NavBar from './components/NavBar';

import { Container } from 'react-bootstrap';
import ItemListContainer from './components/store/ItemListContainer';
function App() {  
  return (
    <div className="App">
      <Container fluid>
        <NavBar />
        <ItemListContainer WelcomeMessage={"Hola Bienvenidos a React Store"}/>
      </Container>
    </div>
  );
}

export default App;
