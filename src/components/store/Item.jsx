import { Card, Button,Row,Col } from 'react-bootstrap';
import { default as CounterButton } from '../utils/counter.jsx';
export default function Item({ product }) {
    let TitleStyle={display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"}
    return (
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
    );
}