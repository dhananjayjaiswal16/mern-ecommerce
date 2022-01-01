import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

import StripeCheckout from 'react-stripe-checkout';
import { publicRequest, userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'




const stripekey = process.env.REACT_APP_STRIPE_KEY;



const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    margin-bottom: 25px;
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
    ${mobile({ display: 'none' })};
`
const TopText = styled.span`
    cursor: pointer;
    text-decoration: underline;
    margin: 0 9px;

    
`
const Bottom = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })};
`

const ProductInfo = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;

    ${mobile({ flexDirection: 'column' })};
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({ flexDirection: 'column', alignItems: 'center' })};
`

const Image = styled.img`
    width: 300px;
    
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
    ${mobile({ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' })};
`

const ProductAmountContainer = styled.div`
    margin: 20px 0px;
    ${mobile({ display: 'flex', alignItems: 'center', justifyContent: 'center' })};
`

const ProductAmount = styled.span`
    font-size: 25px;
    margin: 0 8px;
    border: 1px solid #00a7a7;
    padding: 4px 8px;
    border-radius: 10px;
    margin: 0 7px;
    ${mobile({ margin: '0px 13px' })};
    
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
    border: 1px solid #eee; 
    padding: 20px;
    height: 50vh;
    ${mobile({ marginTop: '50px' })};
`
const SummaryTitle = styled.h1`
    font-size: 22px;
    font-weight: 500;
    
`
const SummaryInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    font-weight: ${props => props.total === 'total' && 500};
    font-size: ${props => props.total === 'total' && 21}px;
`

const SummaryText = styled.span`
    
`

const SummaryPrice = styled.span`
`

const SummaryButton = styled.button`
    cursor: pointer;
    font-weight: 600;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`



const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1.2px;
    margin: 20px 0;
`

const Cart = () => {
  const cart = useSelector(state => state.cartSlice);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  }


  useEffect(() => {
    const serverRequest = async () => {
      try {
        const response = await publicRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 1000000,
        });
        console.log("response.data", response.data);
        navigate('/success', {
          stripeData: response.data,
          products: cart,
        });
      } catch (error) {
        console.error("in axios.post()", error);
      }
    }
    stripeToken && serverRequest();

  }, [stripeToken, navigate, cart.total]);


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
            {cart.products.map((product) => <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductId>
                    <strong>Product ID: </strong>{product._id}
                  </ProductId>
                  <ProductName>
                    <strong>Product: </strong>{product.title}
                  </ProductName>
                  <ProductColor color={product.color} />
                  <ProductSize>{product.size}</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove><i className="fas fa-minus" /></Remove>
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Add><i className="fas fa-plus" /></Add>
                </ProductAmountContainer>
                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>)}
          </ProductInfo>
          <OrderSummary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryInfo>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$ {cart.total}</SummaryPrice>
            </SummaryInfo>
            <SummaryInfo>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>$ 5</SummaryPrice>
            </SummaryInfo>
            <SummaryInfo>
              <SummaryText>Discount</SummaryText>
              <SummaryPrice>-$ 5</SummaryPrice>
            </SummaryInfo>
            <SummaryInfo total='total'>
              <SummaryText>Payable Amount</SummaryText>
              <SummaryPrice>$ {cart.total}</SummaryPrice>
            </SummaryInfo>

            <StripeCheckout name='DJ store'
              image='https://i.pinimg.com/originals/54/ba/a5/54baa52c0984d2706589463feafd60ff.png'
              description="Your order total"
              billingAddress
              shippingAddress
              amount={cart.total * 100}
              stripeKey={stripekey}
              token={onToken}
            >
              <SummaryButton>Checkout<i class="fas fa-angle-double-right" style={{ marginLeft: '8px', fontSize: '16px' }} /></SummaryButton>
            </StripeCheckout>
          </OrderSummary>

        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart;
