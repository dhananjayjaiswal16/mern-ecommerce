import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
    flex: 1;
    height: 60vh;
    margin: 0 10px;
    position: relative;
`
const InfoContainer = styled.div`
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-filter: blur(4px); 
    filter: blur(4px);
    position: relative;
    z-index: 2;
    &:hover{
        -webkit-filter: blur(0px); 
        filter: blur(0px);
        
    }
    transition: all 0.3s ease-in-out;
    ${mobile({ height: '30vh' })};
`
const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    position: relative;
    z-index: 3;
`
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    z-index: 3;
`

const Category = ({ category }) => {

  return (
    <Container>

      <Image src={category.img} />
      <InfoContainer>
        <Title>{category.title}</Title>
        <Link to={`/products/${category.cat}`}>
          <Button>Shop Now</Button>
        </Link>
      </InfoContainer>

    </Container>
  )
}

export default Category;
