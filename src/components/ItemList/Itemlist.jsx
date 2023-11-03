import React from 'react';
import Item from "../Item/Item.jsx";
import './itemList.css'

const Itemlist = ({list}) => {
    return (
        <>
        <section className='listasProductos'>
        {list.map((prod)=> (
        <Item key={prod.id} item={prod}/>
        ) )}
        </section>
        </>
    );
};

export default Itemlist;