import React from 'react';
import Card from 'react-bootstrap/Card';
import "./item.css";
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <article className='card'>
        <Card as={Link} to={"item/"+item.id} style={{ width: '10rem', margin: '8px' }}>
        <Card.Img variant="top" src={item.img} style={{ width: '10rem' }} />
        <Card.Body>
          <Card.Title  >{item.nombre}</Card.Title>
        </Card.Body>
        </Card>
        </article>
    );
};

export default Item;