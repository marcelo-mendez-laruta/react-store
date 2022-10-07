import React, { useEffect, useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Item from './Item.jsx';
import { getStoreItemsList, getStoreItemsByCategory } from '../../services/storeAPI.jsx';
function ItemListContainer({ WelcomeMessage, isCategory }) {
    const [storeItemsList, setstoreItemsList] = useState([]);
    const params = useParams();
    const category = params.categoria ? params.categoria : '';
    useEffect(() => {
        if (isCategory) {
            getStoreItemsByCategory(category)
                .then(items => {
                    setstoreItemsList(items);
                })
        } else {
            getStoreItemsList()
                .then(items => {
                    setstoreItemsList(items);
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeItemsList])
    return (
        <Row className="g-3">
            <Col sm="12" className='p-3'>
                <Alert variant='info'>
                    {WelcomeMessage}
                </Alert >
            </Col>
            <Col sm="12">
                <p>{isCategory ? category : "Nuestros Productos"}</p>
            </Col>
            {storeItemsList.map((item, index) =>
            (
                <Col key={index}>
                    <Item product={item} />
                </Col>
            )
            )}
        </Row>
    );
}

export default ItemListContainer;