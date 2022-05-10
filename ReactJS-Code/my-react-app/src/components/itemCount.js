import * as React from 'react';
import {useState} from 'react';

const Counter = ({initial, stock}) => {

    const [count, setCount] = useState(initial);
    const [bool, setBool] = useState(false);
    const [frase, setFrase] = useState("")
    
    const suma = () => {
        if ( count == stock) {
            setBool(false)
            setFrase("Limite de stock")
        }else{
            setCount(count + 1);
            setFrase("");
        }
    };
    const restar = () => {
        if ( count === 0) {
            setBool(false)
            setFrase("No puedes comprar 0 items")
        }else{
            setCount(count - 1);
            setFrase("");
        }
    }
    
    return (

        <div>
            <button disabled={bool} onClick={suma}>+</button>
            <p>{count}</p>
            <button disabled={bool} onClick={restar}>-</button>
            <button>Add Cart</button>
            <p>{frase}</p>
        </div>

    )



}

export default Counter;