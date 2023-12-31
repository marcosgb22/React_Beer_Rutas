import React, { useState, useEffect } from 'react';
import './itemListConteiner.css'
import ItemList from "../ItemList/Itemlist.jsx";
import SpinnerLoading from '../Spinner/Spinner.jsx';
import Footer from '../Footer/Footer.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({mensaje}) => {
    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    useEffect(() => {
        const fetchData = () => {
            return fetch('/data/data.json')
            .then((response) => response.json())
            .then((data)=>{
                    setProducts(data)                           
                })
        }
        fetchData();
    },[])

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
        <Footer/>
        </>
    );
};

export default ItemListContainer;