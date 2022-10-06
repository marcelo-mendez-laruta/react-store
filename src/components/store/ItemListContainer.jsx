import { getStoreItemsList } from '../../services/storeAPI.jsx';
import React, { useEffect, useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import Item from './Item.jsx';
function ItemListContainer({ WelcomeMessage }) {
    const [storeItemsList, setstoreItemsList] = useState([]);
    useEffect(() => {
        getStoreItemsList()
            .then(items => {
                setstoreItemsList(items);
            })
    }, [])
    return (
        <Row className="g-3">
            <Col sm="12" className='p-3'>
                <Alert variant='info'>
                    {WelcomeMessage}
                </Alert >
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