import React, { useState, useEffect } from 'react';

import ItemList from "../ItemList/Itemlist.jsx";
import SpinnerLoading from '../Spinner/Spinner.jsx';
import { useParams } from 'react-router-dom';


const ItemListContainerCategory = ({mensaje}) => {
    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        const fetchData = () => {
            return fetch('/data/data.json')
            .then((response) => response.json())
            .then((data)=>{
                if(categoryId){
                    const filterProducts = data.filter(p=>p.categoria == categoryId )
                    setProducts(filterProducts)

                }else{
                    setProducts(data)
                }
                })
        }
        fetchData();
    },[categoryId])

    return (
        <>
        <div className='listContainer'>
            <h1 className='mensajePrincipal'>{mensaje}</h1>

          {(products.length)
            ?
            <ItemList list={products}/>
            :
            <SpinnerLoading/>

            }
        </div>
        </>
    );
};

export default ItemListContainerCategory;