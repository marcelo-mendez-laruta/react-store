import { useState } from 'react';
import { InputGroup, Button, Form } from "react-bootstrap";
function CounterItems(max) {
    const [count, setCount] = useState(0);
    const AddToCount = () => {
        setCount(count + 1);
    };
    const DeductToCount = () => {
        setCount(count - 1);
    };
    return (
        <InputGroup className="mb-3" size="sm">
            <Button variant="outline-secondary" id="button-addon1" disabled={count <= 0 ? true : false} onClick={DeductToCount}>
                -
            </Button>
            <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="0"
                value={count}
            />
            <Button variant="outline-secondary" id="button-addon2" disabled={count >= max ? true : false} onClick={AddToCount}>
                +
            </Button>
        </InputGroup>
    );
}

export default CounterItems;