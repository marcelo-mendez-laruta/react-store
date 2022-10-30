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
    const convertDate = (date) => {
        console.log(date);
        var dateFormat = new Date(date.seconds * 1000);
        console.log(dateFormat);
        return dateFormat.getDate() +
            "/" + (dateFormat.getMonth() + 1) +
            "/" + dateFormat.getFullYear() +
            " " + dateFormat.getHours() +
            ":" + dateFormat.getMinutes() +
            ":" + dateFormat.getSeconds();
    }
    return (
        <>
            <h1>Mis Compras</h1>
            {myOrders.length > 0 ? (<Accordion>
                {myOrders.map(function (order) {
                    return (<Accordion.Item eventKey={order.id}>
                        <Accordion.Header>Compra Realizada en {convertDate(order.createdOn)} con codigo {order.id}</Accordion.Header>
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
                            <p className="h5"><strong>Precio Total: {order.totalPrice}</strong></p>
                        </Accordion.Body>
                    </Accordion.Item>)
                })}
            </Accordion>) : <p>No tiene compras realizadas aun.</p>}
        </>
    )
}
export default MyOrders;