import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styled from 'styled-components';

const Product = (props) => {
    const API = "https://api.pujakaitem.com/api/products"
    useEffect(() => {
        getProducts();

    }, [])
    const getProducts = async () => {
        const res = await axios.get(API);
        props.setProducts(res.data)

    }
    const Wrapper = styled.section`
    .featclass{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0px;
        width:inherit;
    
        
    }
    .features{
        border-radius: 179px;
        margin:30px;
        background: linear-gradient(180deg, rgba(229, 188, 188, 0.00) 23.07%, rgba(228, 197, 252, 0.57) 41.31%, #C881FF 84.07%, rgba(167, 56, 255, 0.70) 95.49%);
        background-blend-mode: multiply;
        box-shadow: 6px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 41px 39px 4px 0px rgba(202, 114, 255, 0.25);
        width: 80%;
        height: 280px;
        flex-shrink: 0;
        border:2px solid purple;
        border-radius:10px; 
        
    }
    .div{
       margin:250px;
       margin-left:50px;;
       margin-top:50px;
       margin-right:50px;
    }
    .name{
        color: purple;

        font-family: "Luckiest Guy";
        font-size: 21px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        
        text-decoration:none;
    }
    .namePrice{
        display:flex;
        padding:5px;
        justify-content:space-between; 
        margin-top:20px;  
    }
    .des{
        color: purple;

        font-family: "Luckiest Guy";
        font-size: 11px;
        text-transform: lowercase;
        font-weight: 200;

    }
    .cart{
        display:block;
        margin:auto;
        margin-top:20px;
        width: 337px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 45px;
        background: linear-gradient(89deg, #BD00FF -4.74%, rgba(255, 27, 164, 0.00) 120.41%);
        text-align: center;
        font-family: "M PLUS 1 Code";
        font-size: 26px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        display: flex;
        width: 337px;
        height: 54px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;



    }
    .link{
        text-decoration:none;
    }`
    const { type } = useParams();
    var Products = props.Products
    console.log(Products)
    return (
        <Wrapper>
            <div className="featclass">

                {Products.map((product, index) => {
                    if (product.category === type && type != "all") {
                        return (
                            <NavLink to={`singleproduct/${product.id}`} className='link'>
                                <div className="features div" key={index}>
                                    <img src={product.image} className="features"></img>
                                    <div className="namePrice">
                                        <div className="name">{product.name}</div>
                                        <div className="name">{product.price}/-</div>
                                    </div>
                                    <div className="name des">{product.description.slice(0, 80)}...</div>
                                    <div className="cart">Add to Cart</div>



                                </div>
                            </NavLink>

                        )
                    }
                    else if (type === "all") {
                        return (
                            <NavLink to={`singleproduct/${product.id}`} className='link'>
                                <div className="features div" key={index}>
                                    <img src={product.image} className="features"></img>
                                    <div className="namePrice">
                                        <div className="name">{product.name}</div>
                                        <div className="name">{product.price}/-</div>
                                    </div>
                                    <div className="name des">{product.description.slice(0, 80)}...</div>
                                    <div className="cart">ADD TO CART</div>



                                </div>
                            </NavLink>
                        )
                    }

                })

                }


            </div>
        </Wrapper>
    )
}

export default Product
