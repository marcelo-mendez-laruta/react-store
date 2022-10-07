import logo from '../logo.svg';
import {Container,Navbar, Nav,NavDropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CartButton from './store/CartButton.jsx';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/storeAPI.jsx';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const [categoriesList, setcategoriesList] = useState([]);
    const navigate = useNavigate();
    const goToCategory = (e, category) => {
        e.preventDefault();
        let url = '/categoria/' + category;
        navigate(url);
    };
    useEffect(() => {
        getCategories()
            .then(items => {
                setcategoriesList(items);
            })
    }, [])
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Store Logo"
                        />
                        React Store
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                {categoriesList.map((category, index) => (
                                    <NavDropdown.Item onClick={e=>goToCategory(e,category)} key={index}>{category}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <Nav.Link href="#action2">
                                <CartButton />
                            </Nav.Link>
                            <Nav.Link href="#action2"><FontAwesomeIcon icon={faBars} /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;