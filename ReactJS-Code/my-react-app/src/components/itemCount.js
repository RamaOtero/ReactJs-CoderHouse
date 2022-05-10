import * as React from 'react';
import {useState} from 'react';

function Counter({stock, initial}){

    const [count, setCount] = useState(initial);

    const sumar = () => {
        setCount(count + 1);
    }
    const restar = () => {
        setCount(count - 1);
    }

    if ({count} > stock) {
        setCount(0)
    }

    return (

        <div>
            <button onClick={sumar}>+</button>
            {count}
            <button onClick={restar}>-</button>
        </div>

    )



}

export default Counter;