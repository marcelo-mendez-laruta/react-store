import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useStoreContext } from '../../context/StoreContext.jsx';
import { Card, Button, Row, Col, Modal, Alert } from 'react-bootstrap';
import { default as CounterButton } from '../utils/counter.jsx';

function ItemDetail() {
    let TitleStyle = {
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    };
    const params = useParams();
    const { product, getProduct, quantity, addtoCart } = useStoreContext();
    const [showAlert, setShowAlert] = React.useState(false);
    const handleAddToCart = () => {
        addtoCart();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 1000);
    };
    useEffect(() => {
        getProduct(params.productId);
    }, [params.productId, getProduct]);
    return (<>
        {<Row className="justify-content-md-center">
            <Col xs="12" lg="4">
                <Card>
                    <Card.Img fluid variant="top" src={product.image} style={{ height: '12rem', objectFit: 'contain', padding: '25px' }} />
                    <Card.Body>
                        <Card.Title style={TitleStyle}>{product.title}</Card.Title>
                        <Card.Text>
                            {product.descripcion}
                        </Card.Text>
                        <Card.Text >
                            {product.price} $Bs.
                        </Card.Text>
                        <Row>
                            <Col sm={6}>Stock</Col>
                            <Col sm={6}>{product.stock}</Col>
                        </Row>
                        <Row>
                            <Col sm={6}>Cantidad</Col>
                            <Col sm={6}><CounterButton max={product.stock} /></Col>
                        </Row>
                        <Row>
                            <Col sm={6}>Precio Total</Col>
                            <Col sm={6}>{(product.price * quantity).toFixed(2)} $Bs.</Col>
                        </Row>
                        <Button variant="primary" onClick={handleAddToCart}>Añadir al carrito</Button>
                    </Card.Body>
                </Card>
                <Modal show={showAlert} centered>
                    <Modal.Body><Alert variant="success">
                        Producto agregado con exito.
                    </Alert></Modal.Body>
                </Modal>
            </Col>
        </Row>}

    </>);
}

export default ItemDetail;