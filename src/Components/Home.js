import React from 'react'
import styled from 'styled-components'
import FeaturedProducts from './FeaturedProducts'

const Home = () => {
    const Wrapper = styled.section`
    .home{
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.64) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(216, 142, 242, 0.57) 28.5%, rgba(144, 77, 168, 0.57) 88.5%);
        background-blend-mode: normal, hard-light;
        height:100vh;
        width:inherit;
    }
    .head{
        background: linear-gradient(180deg, #B85FCE 77.57%, rgba(98, 0, 123, 0.00) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-family: "Lily Script One";
        font-size: 96px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: inherit;
        height: 99px;
        flex-shrink: 0;
        display:block;
        margin:auto;
        margin-top:100px;
    }
    .tag{
        background: linear-gradient(90deg, #CB76FF 59.7%, rgba(148, 66, 198, 0.00) 86.38%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        font-family: "Lily Script One";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: inherit;
        height: 91px;
        flex-shrink: 0;
        display:block;
        margin:auto;
        margin-bottom:100px;
    }
    .featclass{
        display:flex;
        justify-content:space-evenly;
        overflow-x:scroll;
    }
    .features{
        border-radius: 179px;
        background: linear-gradient(180deg, rgba(229, 188, 188, 0.00) 13.07%, rgba(228, 197, 252, 0.57) 41.31%, #C881FF 84.07%, rgba(167, 56, 255, 0.70) 95.49%);
        background-blend-mode: multiply;
        box-shadow: 6px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 41px 39px 4px 0px rgba(202, 114, 255, 0.25);
        width: inherit;
        height: 280px;
        flex-shrink: 0;
    }
    .name{
        color: purple;

        font-family: "Luckiest Guy";
        font-size: 21px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-transform: uppercase;
        background: linear-gradient(180deg, #B972FF 0%, rgba(164, 137, 190, 0.00) 66.5%);
        text-decoration:none;
    }

    
    `
  return (
    <Wrapper>
    <div className='home'>
       <div className="head">
         STOP AND SHOP

        </div>
        <div className="tag">
        Your ultimate shopping stoppage

        </div>
        <FeaturedProducts />
        </div>
       
    </Wrapper>
  )
}

export default Home
