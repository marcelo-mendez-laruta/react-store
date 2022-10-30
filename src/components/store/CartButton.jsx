import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useStoreContext } from '../../context/StoreContext.jsx';
import { useNavigate } from 'react-router-dom';
function CartButton() {
    const { cartState } = useStoreContext();
    const navigate = useNavigate();
    const gotoCart = (e) => {
        e.preventDefault();
        navigate('/carrito');
    }
    useEffect(() => {
    }, [cartState]);
    return (
        <OverlayTrigger
            key="CartButton"
            placement="bottom"
            overlay={
                <Tooltip id="tooltip-CartButton">
                    Mi carrito
                </Tooltip>
            }
        >
            <button type="button" className="btn btn-link position-relative" onClick={gotoCart}>
                <FontAwesomeIcon icon={faCartShopping} />
                {
                    cartState ? (<span className="position-absolute top-1 start-99 translate-middle p-2 bg-danger border border-light rounded-circle">
                        <span className="visually-hidden">unread messages</span>
                    </span>) : null
                }

            </button>
        </OverlayTrigger>);
}

export default CartButton;