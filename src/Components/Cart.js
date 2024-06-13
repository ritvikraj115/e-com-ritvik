import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { IoTrashBin } from "react-icons/io5";

const Cart = () => {
    const a=useCartContext();
    console.log(a);
    const[products,setProducts]=useState([])
    // const[totalAmount,setTotalAmount]=useState();

    useEffect(()=>{
        setProducts(a.cart)

    },[a.cart])

    const Wrapper=styled.section`
    .cart{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(216, 142, 242, 0.57) 28.5%, rgba(144, 77, 168, 0.57) 88.5%), #FFF;
        background-blend-mode: hard-light, normal;
        height:100vh;
    }
    .head{
        background: linear-gradient(180deg, #1F0A0A 32%, rgba(58, 49, 60, 0.00) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-family: "M PLUS 1 Code";
        font-size: 96px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        display: flex;
        width: 433px;
        height: 133px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        display:block;
        margin:auto;
        margin-top:50px;
    }
    .items{
        width: 1426px;
        height: 529px;
        flex-shrink: 0;
        background: linear-gradient(180deg, #FFCEF4 51%, rgba(250, 25, 254, 0.00) 100%);
        display:block;
        margin:auto;

    }
    .cartItems{
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        font-family: Macondo;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        background: linear-gradient(180deg, #D41414 56.5%, rgba(223, 129, 129, 0.00) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top:20px;
    }
    .maincart{
        display:flex;
        justify-content:space-evenly;
    }
    .order{
        flex-shrink: 0;
        background: linear-gradient(180deg, #882626 96%, rgba(201, 67, 67, 0.00) 10%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin:50px;

    }
    .orderSummary{
        text-align: center;
        text-shadow: 6px 9px 7.8px rgba(200, 33, 203, 0.25);
        -webkit-text-stroke-width: 0.5;
        -webkit-text-stroke-color: #766A6A;
        font-family: "Rampart One";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 1.6px;
        text-decoration-line: underline;
        background: linear-gradient(180deg, #FFF 143.08%, rgba(255, 166, 166, 0.00) 216.79%);
        background: linear-gradient(180deg, #882626 26%, rgba(201, 67, 67, 0.00) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding:5px;
        margin:5px;
    }
    .total{
        font-family: Ruda;
        font-size: 22px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;

    }
    .dustbin{
        cursor:pointer
    }

    `
  return (
    <Wrapper>
        <div className="cart">
            <div className="head">CART</div>
            <div className="items">
                {products.map((product,index)=>{
                    // {setTotalAmount(...totalAmount)}
                    return(
                    
                        <div className="maincart" key={product.id}>
                        <div className="cartItems">{product.name}</div>
                        <div className="cartItems">{product.amount}</div>
                        <div className="cartItems">{product.price*product.amount}</div>
                        <div className="dustbin cartItems" onClick={()=>{
                            a.removeFromCart(product.id)
                        }}><IoTrashBin /></div>
                        </div>                    
                        )
                })}
                <div className="order">
                <div className="orderSummary">ORDER SUMMARY</div>
                <div className="total orderSummary">TOTAL_ITEMS---{a.total_item}</div>
                <div className="total  orderSummary">TOTAL_PRICE---{a.total_price}</div>
                </div>


            </div>

        </div>
    </Wrapper>
  )
}

export default Cart
