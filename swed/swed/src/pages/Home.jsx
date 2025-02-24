import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import styled from "styled-components"

const Title = styled.h1`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color:white;
  margin: auto;
  height: 35px;
  width: 100vw;
  text-align: center; 
  font-weight:700;
  background-color:teal;
  opacity:1;
  // border-radius:30px;
  // border: 3px solid #000;
`;

const Home = () => {
  
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
       <Title>Product Categories</Title>
      <Categories/>
      <Title>Popular Products</Title>
      <Products/>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}

export default Home
