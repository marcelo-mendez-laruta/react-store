import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getStoreItem } from '../../services/storeAPI.jsx';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { default as CounterButton } from '../utils/counter.jsx';

function ItemDetail() {
    let TitleStyle = {
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    };
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getStoreItem(productId)
            .then(item => {
                setProduct(item);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])
    return (<>
        <Card style={{ width: '18rem' }}>
            <Card.Img fluid variant="top" src={product.image} style={{ height: '12rem', objectFit: 'contain' }} />
            <Card.Body>
                <Card.Title style={TitleStyle}>{product.title}</Card.Title>
                <Card.Text>
                    {product.descripcion}
                </Card.Text>
                <Card.Text >
                    {product.price} $Bs.
                </Card.Text>
                <Row>
                    <Col sm={6}>Cantidad</Col>
                    <Col sm={6}><CounterButton max={product.stock} /></Col>
                </Row>
                <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
        </Card>
    </>);
}

export default ItemDetail;