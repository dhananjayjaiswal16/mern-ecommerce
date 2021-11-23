import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  
`


const Image = styled.img`
  height: 75%;
  z-index: 2;
  /* &:hover{
    -webkit-filter: blur(4px); 
    filter: blur(4px);
  } */
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <InfoContainer>
        <Icon><i className="fas fa-shopping-cart" /></Icon>
        <Icon><Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}><i className="fas fa-search" /></Link></Icon>
        <Icon><i className="fas fa-heart" /></Icon>
      </InfoContainer>
    </Container>
  )
}

export default Product;
