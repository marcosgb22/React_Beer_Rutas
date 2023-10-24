import React from 'react';
import Count from '../Count/Count';
import './itemListConteiner.css'

const ItemListContainer = ({mensaje}) => {
    return (
        <>
        <div className='Mensaje'>
            <h1>{mensaje}</h1>
            <Count initial={1} stock={10}/>
        </div>
        </>
    );
};

export default ItemListContainer;