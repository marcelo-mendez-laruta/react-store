import { getStoreItemsList } from '../../services/storeItemsList.jsx';
import React, { useEffect, useState } from 'react';
import { Row, Col,Alert  } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';
function ItemListContainer({ WelcomeMessage }) {
    console.log(WelcomeMessage);
    const [storeItemsList, setstoreItemsList] = useState([]);
    useEffect(() => {
        let mounted = true;
        getStoreItemsList()
            .then(items => {
                if (mounted) {
                    setstoreItemsList(items);
                }
            })
        return () => mounted = false;
    }, [])
    return (
        <Row>
            <Col sm="12" className='p-3'>
                <Alert variant='info'>
                    {WelcomeMessage}
                </Alert >
            </Col>
            {storeItemsList.map((item, index) =>
            (
                <Col key={index}>
                    <ProductCard product={item} />
                </Col>
            )
            )}
        </Row>
    );
}

export default ItemListContainer;