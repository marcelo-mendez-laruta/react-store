import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function CartButton() {
    return (<button type="button" className="btn btn-link position-relative">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="position-absolute top-1 start-99 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">unread messages</span>
        </span>
    </button>);
}

export default CartButton;