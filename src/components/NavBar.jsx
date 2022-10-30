import logo from '../logo.svg';
import { Container, Navbar, Nav, DropdownButton, Dropdown, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import CartButton from './store/CartButton.jsx';
import React from 'react';
import { useStoreContext } from '../context/StoreContext.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function NavBar() {
    const { categories, setMyOrders } = useStoreContext();
    const { isLoggedin, user, logout, setModalVisibility, } = useAuthContext();
    const navigate = useNavigate();
    const goToCategory = (e, category) => {
        e.preventDefault();
        let url = '/categoria/' + category;
        navigate(url);
    };
    const gotoHome = (e) => {
        e.preventDefault();
        navigate('/');
    }
    const viewLoginModal = (e) => {
        e.preventDefault();
        setModalVisibility(true)
    }
    const gotoMyOrders = (e) => {
        e.preventDefault();
        navigate('/mis-compras');
    }
    const handleLogout = (e) => {
        e.preventDefault();
        setMyOrders([]);
        logout();
    }
    useEffect(
        () => {
        }, [categories]
    )
    return (
        <>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand onClick={gotoHome}>
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
                    <Navbar.Collapse className="justify-content-end align-items-center">
                        <Nav>
                            <DropdownButton size="sm" title="Categorias" variant="primary" className=' mt-2 mr-5'>
                                {
                                    categories.map(function (category) {
                                        return (
                                            <Dropdown.Item onClick={e => goToCategory(e, category.id)} key={category.id}>{category.name}</Dropdown.Item>
                                        );
                                    })

                                }
                            </DropdownButton>
                            <Nav.Link href="#action2">
                                <CartButton />
                            </Nav.Link>
                            {
                                isLoggedin ? <Dropdown align="end">
                                    <Dropdown.Toggle variant="link" id="dropdown-user">
                                        {user.photoURL ? (<Image roundedCircle src={user.photoURL} style={{ height: '35px' }} />) : user.email}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={e=>gotoMyOrders(e)}><FontAwesomeIcon icon={faClipboardList} /> Mis Ordenes</Dropdown.Item>
                                        <Dropdown.Item onClick={e => handleLogout(e)} className="text-danger "><FontAwesomeIcon icon={faRightFromBracket} /> Cerrar Sesion</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> :
                                    <Button size="sm" variant="primary" onClick={e => viewLoginModal(e)}>Iniciar Sesión</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;