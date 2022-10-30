import React, {  useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Item from './Item.jsx';
import { useStoreContext } from '../../context/StoreContext.jsx';


function ItemListContainer({ WelcomeMessage, isCategory }) {
    const params = useParams();
    const { products,getCategory,category } = useStoreContext();
    useEffect(() => {
        getCategory(params.categoria);
    });
    return (
        <Row className="g-3">
            <Col sm="12" className='p-3'>
                <Alert variant='info'>
                    {WelcomeMessage}
                </Alert >
            </Col>
            <Col sm="12">
                <p className="h2 my-5"><strong>{isCategory ? category? category.name:"loading..." : "Nuestros Productos"}</strong></p>
            </Col>
            {products.length > 0 ? products.map(function (item) {
                if (isCategory) {
                    return item.category === params.categoria ? (<Col key={item.id}>
                        <Item product={item} />
                    </Col>):null;
                }
                else {
                    return (<Col key={item.id}>
                        <Item product={item} />
                    </Col>);
                }
            }
            ) : <Col sm="12" className='p-3'><Alert variant='warning'>Cargando Items...</Alert ></Col>}
        </Row>
    );
}

export default ItemListContainer;