import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Cart from './Cart'
import { useCartContext } from '../context/cart_context'

const SingleProduct = () => {
    var res;
    const Wrapper=styled.section`
    .body{
        background: radial-gradient(50% 50% at 50% 50%, rgba(233, 252, 255, 0.95) 0.01%, rgba(121, 121, 121, 0.95) 34.07%, rgba(227, 235, 233, 0.00) 67.07%), linear-gradient(180deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(216, 142, 242, 0.57) 28.5%, rgba(144, 77, 168, 0.57) 88.5%), #FFF;
        background-blend-mode: screen, normal, hard-light, normal; 
        height:100vh;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .image{
        background: linear-gradient(180deg, #F81CEF 0%, rgba(255, 63, 247, 0.00) 90%);
        height:100vh;

    }
    .subimage{
        border-radius: 733px;
        background: #D9D9D9;
        height:300px;
        width:300px;
        margin:200px;
        margin-bottom:0px;
        border:15px solid purple;
        padding:5px;


    }
    .images{
        display:flex;
        margin-left:25%;
        margin-top:10px;
    }
    .si{
        height:70px;
        width:70px;
        border-radius:36px;
        padding:2px;
        border:5px solid purple;
        
    }
    .details{
        margin:30px;
        padding:10px;
    }
    .namePrice{
        display:flex;
        justify-content:space-between;
    }
    .name{
        background: linear-gradient(180deg, #B972FF 0%, rgba(264, 137, 190, 0.00) 296.5%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Imperial Script";
        font-size: 26px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
    }
    .description{
        color: #784B4B;
        font-family: Jura;
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: capitalize;
        margin:30px 100px;
    }
    .company{
        color: #A25555;
        font-family: "Luckiest Guy";
        font-size: 22px;
        font-style: normal;
        font-weight: 1800;
        margin:10px;
        line-height: normal;
        text-transform: uppercase;
        display:block;
        margin-left:650px;
    }
    .cart{
        width: 137px;
        display:block;
        margin:auto;
        margin-top:100px;
        height: 53px;
        flex-shrink: 0;
        border-radius: 45px;
        background: linear-gradient(89deg, #BD00FF -4.74%, rgba(255, 27, 164, 0.00) 120.41%);
        text-align: center;
        font-family: "M PLUS 1 Code";
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        cursor:pointer;
    }



    
    `
    const API="https://api.pujakaitem.com/api/products"
    const {addToCart}=useCartContext()
    const[singleproduct,setSinglePoduct]=useState([" "])
    const[image,setImage]=useState('')
    const[imgs,setImgs]=useState([{url:" "}])
    const {id}=useParams()
    const getProducts=async()=>{
        res=await axios.get(`${API}?id=${id}`)
        setSinglePoduct(res.data)
        setImage(res.data.image[0].url)
        setImgs(res.data.image)

    }
    useEffect(()=>{
        getProducts();

    },[])
    
  return (
    <Wrapper>
        <div className="body">
            <div className="image">
               
                <img src={image} alt="" className="subimage" />
                <div className="images">
                {imgs.map((curImg,index)=>{
                    return(
                    <img src={curImg.url} key={index} alt="" className="si" onClick={()=>{setImage(curImg.url)}}/>
                    )

                })}
                </div>
            </div>
            <div className="details">
                <div className="namePrice">
                <div className="name">{singleproduct.name}</div>
                <div className="name">{singleproduct.price}/-</div>
            </div>
            <div className="description">{singleproduct.description}</div>
            <div className="company">{singleproduct.company}</div>
            <div className="cart"><button className='cart' onClick={()=>{
                addToCart(singleproduct.id,1,singleproduct);

            }}>ADD TO CART</button></div>
        
            </div>

        </div>

    </Wrapper>
  )
}

export default SingleProduct
