import React, { useEffect } from 'react';
import { useStoreContext } from '../../context/StoreContext.jsx';
import { useAuthContext } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Accordion, Table } from 'react-bootstrap';
function MyOrders() {
    const { myOrders, getAllOrders } = useStoreContext();
    const { user, isLoggedin } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedin) {
            if (myOrders.length < 1) {
                getAllOrders(user.uid);
            }
        }
        else {
            navigate('/');
        }
    }, [isLoggedin]);
    return (
        <>
            <h1>Mis Compras</h1>
            {myOrders.length > 0 ? (<Accordion>
                {myOrders.map(function (order) {
                    return (<Accordion.Item eventKey="item.id">
                        <Accordion.Header>Compra Realizada en {String(order.createdOn)}</Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio Unitario</th>
                                        <th>Cantidad</th>
                                        <th>Precio Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.items.map(function (item) {
                                        return <tr>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price * item.quantity}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </Table>
                            <p class="h5"><strong>Precio Total: {order.totalPrice}</strong></p>
                        </Accordion.Body>
                    </Accordion.Item>)
                })}
            </Accordion>) : <p>No tiene compras realizadas aun.</p>}
        </>
    )
}
export default MyOrders;