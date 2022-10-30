import React, { useState, useEffect } from 'react';
import { Alert, Row, Col, Card, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useStoreContext } from '../../context/StoreContext.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';
function Checkout() {
    const { cart, deletItemCart,addOrder } = useStoreContext();
    const { user, isLoggedin, setModalVisibility } = useAuthContext();
    const [total, setTotal] = useState(0);
    const deletItem = (e, id) => {
        e.preventDefault();
        deletItemCart(id);
    }
    const viewLoginModal=(e)=>{
        e.preventDefault();
        setModalVisibility(true)
    }
    const addOrderToDB=(e)=>{
        e.preventDefault();
        addOrder(user.uid,total);
    }
    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotal(total);
    }, [total, cart]);
    return (
        <>
            <Row className="justify-content-md-center" style={{ marginTop: "50px" }}>
                <Col sm="11">
                    {cart.length > 0 ? (
                        <Card>
                            <Card.Header style={{ backgroundColor: "black", color: "white" }}>Lista de Compras</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio Unitario</th>
                                            <th>Cantidad</th>
                                            <th>Precio Total</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(function (item) {
                                            return <tr>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price * item.quantity}</td>
                                                <td><Button type="button" variant='link'>
                                                    <FontAwesomeIcon icon={faTrash} color="red" onClick={e => deletItem(e, item.id)} />
                                                </Button></td>
                                            </tr>
                                        })}
                                    </tbody>
                                </Table>
                                <p className="h5"><strong>Precio Total: {total}</strong></p>
                            </Card.Body>
                            <Card.Footer>
                                <Row className="justify-content-end no-gutters">
                                    <Col sm="4" className='text-end'>
                                        {
                                            isLoggedin ? <Button variant="primary" onClick={e=>addOrderToDB(e)}>Comprar</Button> : <Button variant="primary" onClick={e=>viewLoginModal(e)}>Iniciar Sesión</Button>
                                        }
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    ) : <Alert variant="info">Lista de compra vacia</Alert>}
                </Col>
            </Row>
        </>
    );

}
export default Checkout;