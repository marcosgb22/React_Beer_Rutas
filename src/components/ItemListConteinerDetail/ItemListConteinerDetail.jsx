import React, { useState, useEffect } from 'react';

import SpinnerLoading from '../Spinner/Spinner.jsx';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';

const ItemContainerDetail = () => {


    const [product,setProduct] = useState(null)

    const {idProduct} = useParams()



    useEffect(() => {
        const fetchData = () => {
            return fetch('/data/data.json')
            .then((response) => response.json())
            .then((data)=>{
                const foundProduct = data.find((item) => item.id == idProduct)
                setProduct(foundProduct)
                })
        }
        fetchData();
    },[idProduct])

    return (
        <>
        <div>
            {
            product
            ?
            <ItemDetail producto={product}/>
            :
            <SpinnerLoading/>
            }
        </div>
        </>
    );
};

export default ItemContainerDetail;