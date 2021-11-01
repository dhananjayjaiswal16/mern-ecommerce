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
const Bottom = styled.div`
    display: flex;
`

const ProductInfo = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex
`

const Image = styled.img`
    width: 250px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
`

const ProductId = styled.span``

const ProductName = styled.span`
    margin: 12px 0;
`

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span`
    margin-top: 12px;
`


const PriceDetail = styled.div`
    flex: 1;
`

const ProductAmountContainer = styled.div`
    margin: 20px 0px;
`

const ProductAmount = styled.span`
    font-size: 25px;
    margin: 0 8px;
    
`

const Remove = styled.span`
    cursor: pointer;
`

const Add = styled.span`
    cursor: pointer;
`

const ProductPrice = styled.div`
    font-size: 28px;
    font-weight: 200;
`


const OrderSummary = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1.2px;
    margin: 20px 0;
`

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
                    <ProductInfo>
                        <Product>
                            <ProductDetail>
                                <Image src='https://img.freepik.com/free-photo/running-shoes-white-background_10541-635.jpg?size=626&ext=jpg' />
                                <Details>
                                    <ProductId>
                                        <strong>Product ID: </strong>27148210948
                                    </ProductId>
                                    <ProductName>
                                        <strong>Product: </strong>Nike Thunder shoes
                                    </ProductName>
                                    <ProductColor color='gray' />
                                    <ProductSize>40</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove><i className="fas fa-minus" /></Remove>
                                    <ProductAmount>2</ProductAmount>
                                    <Add><i className="fas fa-plus" /></Add>
                                </ProductAmountContainer>
                                <ProductPrice>$ 49</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr />

                        <Product>
                            <ProductDetail>
                                <Image src='https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png' />
                                <Details>
                                    <ProductId>
                                        <strong>Product ID: </strong>27148210948
                                    </ProductId>
                                    <ProductName>
                                        <strong>Product: </strong>Nike Thunder shoes
                                    </ProductName>
                                    <ProductColor color='#F5F5DC' />
                                    <ProductSize>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Remove><i className="fas fa-minus" /></Remove>
                                    <ProductAmount>2</ProductAmount>
                                    <Add><i className="fas fa-plus" /></Add>
                                </ProductAmountContainer>
                                <ProductPrice>$ 19</ProductPrice>
                            </PriceDetail>
                        </Product>

                    </ProductInfo>
                    <OrderSummary>
                        Order Summary
                    </OrderSummary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
