import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='cart'>
            <BsFillCartFill/>
            <p>1</p>
        </div>
    );
};
export default CartWidget;