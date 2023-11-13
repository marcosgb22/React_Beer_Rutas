import React from 'react';
import "./itemDetail.css"

const ItemDetail = ({producto}) => {
    return (
        <article className='detail'>
                <img src={producto.img} alt=""/>
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>Precio : {producto.precio} $</p>
        </article>
    );
};
export default ItemDetail;
