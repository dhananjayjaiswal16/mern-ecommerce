import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 35px;
    color: #fff;
    background-color: #00a7a7;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({ fontSize: '14px' })};
`

const Announcement = () => {
  return (
    <Container>
      Exclusive offer!! Free Delivery on orders above ₹3000
    </Container>
  )
}

export default Announcement;
