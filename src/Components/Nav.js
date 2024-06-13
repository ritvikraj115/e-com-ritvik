import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { FaSearchengin } from "react-icons/fa6";
import axios from 'axios'
import { useCartContext } from '../context/cart_context';
const Nav = (props) => {
  const [login,setlogin]=useState(false);
  
  var Products=props.Products
  const setProducts=props.setProducts
  const Wrapper = styled.section`
    .nav{
      border-radius: 55px;
      background: linear-gradient(90deg, rgba(219, 92, 240, 0.00) 0%, #F092FF 19%);
      display:block;  
      height: 50px;
      width:inherit;
      flex-shrink: 0;
    }
    .link{
      display:flex;
      justify-content:space-evenly;
      padding-top:10px;
    }
    .links{
      text-decoration:none;
      color: #762D7C;
      text-shadow: 5px 5px 8.2px rgba(122, 7, 237, 0.25);
      font-family: Inika;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      
    }
    .log{
      padding:3px;
      background: linear-gradient(80deg, #1F0A0A 10%, rgba(58, 49, 60, 0.00) 180%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    button{
      background: linear-gradient(89deg, #BD00FF -4.74%, rgba(255, 27, 164, 0.00) 120.41%);
      margin:0px 5px;
    }
    .icon{
      font-size:25px;
    }
    .inactive{
      display:none;

    }
    #previewImage{
      display:none;
    }


   
    `
  return (
    <Wrapper>
      <div className='nav'>
        <div className="link">
          <div><NavLink to="/" className='links'>Home</NavLink></div>
          <div><NavLink to="/products/all" className='links'>Products</NavLink></div>
          <div><NavLink to="/contact" className='links'>Contact</NavLink></div>
          <div className="button">
          <img id="previewImage" alt="Preview"></img>
            <button className={login?"inactive links log":"active links log"} onClick={()=>{
              setlogin(true)
            }}><NavLink to="/login">Login</NavLink></button>
            <button className={login?"inactive links log":"active links log"} onClick={()=>{
              setlogin(true)
            }}><NavLink to="/signup">SignUp</NavLink></button>
            <button className={login?"active links log":"inactive links log"}><NavLink to="/logout" onClick={()=>{
              setlogin(false)
            }}>Logout</NavLink></button>
          </div>
          <div><input type="file" className='links icon' id="myFile" name="filename" /><Link to='/products/all'><FaSearchengin  onClick={async()=>{
          
            var fileInput = document.getElementById('myFile');
            var previewImage=document.getElementById('previewImage')
        
            if (fileInput.files && fileInput.files.length > 0) {
                var selectedFile = fileInput.files[0];
        
                // Display the selected image
                previewImage.src = URL.createObjectURL(selectedFile);
                if (fileInput.files && fileInput.files.length > 0) {
                  var selectedFile = fileInput.files[0];
                }
                  const formData = new FormData();
                  formData.append('file', selectedFile);
          
                  const response= await fetch('http://localhost:5000/capture',{
                      method: 'POST', 
                      body: formData
                  });
                  const res= await response.json();
                  const data = {
                    Products: Products,
                    res: res
                };
                  const response2=await fetch('http://localhost:5000/capture2',{
                    method: 'POST', 
                    body:JSON.stringify(data)
                });
                const res2=await response2.json();
                console.log(res2)
                setProducts(res2)
        
                // You can also access other details of the file
                console.log('File Name:', selectedFile.name);
                console.log('File Size:', selectedFile.size, 'bytes');
                console.log('File Type:', selectedFile.type);
                console.log(previewImage)
            }
        
          }}/></Link></div>
          <div><NavLink to="/cart" className='links icon'><FaShoppingCart/></NavLink></div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Nav
