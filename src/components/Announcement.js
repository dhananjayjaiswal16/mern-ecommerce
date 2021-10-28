import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 35px;
    color: #fff;
    background-color: #00a7a7;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Announcement = () => {
    return (
        <Container>
            Exclusive offer!! Free Delivery on orders above ₹ 2500
        </Container>
    )
}

export default Announcement;
