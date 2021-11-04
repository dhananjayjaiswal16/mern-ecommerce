import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'

import Announcement from '../Announcement'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'

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
`

const Image = styled.img`
    object-fit: cover;
    ${mobile({ width: '100%', marginBottom: '30px', height: '40vh' })};
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    
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
    return (
        <Container>
            <Announcement />
            <Navbar />

            <ProductWrapper>
                <ImageContainer>
                    <Image src='https://img.freepik.com/free-photo/running-shoes-white-background_10541-635.jpg?size=626&ext=jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Product Title</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                    <Price>100$</Price>
                    <FilterContainer>
                        {/* For Color */}
                        <Filter>
                            <FilterTitle>Colors</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        {/* For size */}
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Remove><i className="fas fa-minus" /></Remove>
                            <Quantity>3</Quantity>
                            <Add><i className="fas fa-plus" /></Add>
                        </QuantityContainer>

                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </ProductWrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct;
