import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStoreContext } from "../../context/StoreContext.jsx";

function CounterItems({ max }) {
    const [count, setCount] = useState(1);
    const { setQuantity } = useStoreContext();
    const AddToCount = () => {
        setCount(count + 1);
    };
    const DeductToCount = () => {
        setCount(count - 1);
    };
    const updateCount = (e) => {
        let value = e.target.value;
        value = value > max ? max : value;
        setCount(value);
    }
    useEffect(() => {
        setQuantity(count);
    }, [count, setQuantity])
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1" disabled={count <= 0 ? true : false} onClick={DeductToCount}>-</button>
            </div>
            <input type="text" className="form-control" value={count} onChange={e => updateCount(e)} />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" disabled={count >= max ? true : false} onClick={AddToCount}>+</button>
            </div>
        </div>

    );
}

export default CounterItems;