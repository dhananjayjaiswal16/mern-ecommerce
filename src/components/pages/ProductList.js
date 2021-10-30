import React from 'react'
import styled from 'styled-components';
import Announcement from '../Announcement';
import Navbar from '../Navbar';
import Products from '../Products';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const Container = styled.div`

`
const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const Text = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <FilterWrapper>
                <Filter>
                    <Text>Filter Products</Text>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Text>Sort Products</Text>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterWrapper>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;
