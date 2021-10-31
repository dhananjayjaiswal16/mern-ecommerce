import React from 'react'
import styled from 'styled-components'

import Announcement from '../Announcement'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Newsletter from '../Newsletter'

const Container = styled.div``

const ProductWrapper = styled.div`
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img``

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h2``

const Description = styled.p``

const Price = styled.span``

const FilterContainer = styled.div``

const Filter = styled.div``

const AddContainer = styled.div``

const QuantityContainer = styled.div``

const Quantity = styled.span``

const Button = styled.button``



const SingleProduct = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <ProductWrapper>
                <ImageContainer>
                    <Image />
                </ImageContainer>
                <InfoContainer>
                    <Title></Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                    <Price>100$</Price>
                    <FilterContainer>
                        {/* For Color */}
                        <Filter></Filter>
                        {/* For size */}
                        <Filter></Filter>
                    </FilterContainer>
                    <AddContainer>
                        <QuantityContainer>
                            <Quantity></Quantity>
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
