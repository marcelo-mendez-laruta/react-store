import { Card, Button,Row,Col } from 'react-bootstrap';
import { default as CounterButton } from '../utils/counter.jsx';
export default function ProductCard({ product }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img fluid variant="top" src={product.image} style={{ maxHeight: '12rem', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.descripcion}
                </Card.Text>
                <Card.Text>
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