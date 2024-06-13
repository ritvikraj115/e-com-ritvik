import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
const API="https://api.pujakaitem.com/api/products"

const FeaturedProducts = () => {
    const[Products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts();

    },[])
    const getProducts=async()=>{
        const res=await axios.get(API);
        console.log(res.data);
        setProducts(res.data)
    }
  return (
    <div className="featclass">
       
            {Products.map((product,index)=>{
                if(product.featured===true){
                return(
                <NavLink to={`/products/${product.category}`}>
                 <div className="features" key={index}>
                <img src={product.image} className="features"></img>
                <div className="name">{product.category}</div>
                </div>
                </NavLink>
                )}

            })}

        
    </div>
  )
}

export default FeaturedProducts
