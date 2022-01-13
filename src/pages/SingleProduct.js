import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive'

import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

import { publicRequest, userRequest } from '../requestMethod';
import { addProduct } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';



const Container = styled.div`
    
`

const ProductWrapper = styled.div`
    display: flex;
    margin: 50px 0;
    align-items: center;
    ${mobile({ flexDirection: 'column' })};
`

const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    object-fit: cover;
    height: 50vh;
    ${mobile({ width: '40%', marginBottom: '30px', height: '40vh' })};
`

const InfoContainer = styled.div`
    flex: 2;
    padding: 0 50px;
    ${mobile({ padding: '0 20px' })};
    
`

const Title = styled.h2`
    font-weight: 500;
`

const Description = styled.p`
    margin: 40px 0px;
`

const Price = styled.span`
    font-weight: 300;
    font-size: 30px;
`

const FilterContainer = styled.div`
    display: flex;
    margin: 25px 0;
    justify-content: space-between;
    width: 55%;
    ${mobile({ width: '100%' })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;

`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`

const FilterColor = styled.div`
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 6px;
    ${mobile({ margin: '0px 3px' })}
`

const FilterSize = styled.select`
    margin: 0 8px;
    padding: 3px 6px;
`

const FilterSizeOption = styled.option``


const AddContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ width: '100%' })};
`

const QuantityContainer = styled.div`

`

const Quantity = styled.span`
    border: 1px solid #00a7a7;
    padding: 4px 8px;
    border-radius: 10px;
    margin: 0 7px;
`

const Add = styled.span`
    cursor: pointer;
`

const Remove = styled.span`
    cursor: pointer;
`


const Button = styled.button`
    padding: 10px;
    border: 2px solid #00a7a7;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    &:hover{
        background-color: teal;
        color: #fff;
        border: 2px solid teal;
    }
`



const SingleProduct = () => {

  const location = useLocation();
  const id = location.pathname.split('/')[2];


  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`)
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size
      })
    )
  }



  // console.log(product);
  // console.log(color, size);
  return (
    <Container>
      <Announcement />
      <Navbar />

      <ProductWrapper>
        <ImageContainer>
          <Image src={product?.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Description>{product?.desc}</Description>
          <Price>₹ {product?.price}</Price>
          <FilterContainer>
            {/* For Color */}
            <Filter>
              <FilterTitle>Colors</FilterTitle>
              {product?.color?.map((colour) =>
                <FilterColor color={colour} key={colour}
                  onClick={() => setColor(colour)} />
              )}
            </Filter>
            {/* For size */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((size) =>
                  <FilterSizeOption key={size}>
                    {size}
                  </FilterSizeOption>

                )}

              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <QuantityContainer>
              <Remove onClick={() => quantity > 1 && setQuantity(quantity - 1)}><i className="fas fa-minus" /></Remove>
              <Quantity>{quantity}</Quantity>
              <Add onClick={() => setQuantity(quantity + 1)}><i className="fas fa-plus" /></Add>
            </QuantityContainer>

            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>

      <Newsletter />
      <Footer />
    </Container>
  )


}


export default SingleProduct;
