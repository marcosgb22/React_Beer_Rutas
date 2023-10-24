import React, {useState} from 'react';
import './count.css'

const Count = ({initial,stock}) => {
    let [counter,setCounter] = useState(10)
    const increment = () => {
        if (counter < stock) {
            setCounter(counter+1)
        }
    }
    const decrement = () => {
        if (counter>1) {
            setCounter(counter-1)
        }
    }
    return (
        <div className='Contador'>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <p className='Numero'>Contador: {counter}</p>
            
        </div>
    );
};

export default Count;
