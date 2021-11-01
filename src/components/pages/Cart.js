import React from 'react'
import styled from 'styled-components'
import Announcement from '../Announcement'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    text-align: center;
    font-weight: 400;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 20px;
`
const TopButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    padding: 10px;

    background-color: ${props => props.type === 'checkout' ? '#000' : 'transparent'};
    color: ${props => props.type === 'checkout' && '#fff'};
    border: ${props => props.type === 'checkout' && 'none'};

    display: flex;
    align-items: center;
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0 9px;

    
`



const Bottom = styled.div``

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <TopButton>Continue Shopping <i className="fas fa-shopping-bag" style={{ marginLeft: '8px', fontSize: '16px' }} /></TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (3)</TopText>
                        <TopText>Your wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='checkout'>Checkout <i className="fas fa-receipt" style={{ marginLeft: '8px', fontSize: '16px' }} /></TopButton>


                </Top>
                <Bottom>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
