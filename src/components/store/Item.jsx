import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Item({ product }) {
    let TitleStyle = {
        display: "block",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    };
    const navigate = useNavigate();
    const goToProduct = (e, id) => {
        e.preventDefault();
        let url = '/producto/' + id;
        navigate(url);
    };
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
                <Card.Text >
                    {product.descripcion}
                </Card.Text>
                <div className="d-grid gap-2">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <Button variant="primary" onClick={e => goToProduct(e, product.id)}>Ver</Button>
                    </div>
                </div>

            </Card.Body>
        </Card>
    );
}