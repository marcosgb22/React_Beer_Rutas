import React from 'react';
import Card from 'react-bootstrap/Card';
import "./item.css"

const Item = ({item}) => {
    return (
        <Card style={{ width: '10rem', margin: '8px' }}>
        <Card.Img variant="top" src={item.img} style={{ width: '10rem' }} />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
        </Card.Body>
        </Card>

    );
};

export default Item;