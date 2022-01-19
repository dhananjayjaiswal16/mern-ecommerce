import React, { useState } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';

const Container = styled.div`

`
const FilterWrapper = styled.div`
    display: flex;
    justify-content: space-between
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    ${mobile({ flexDirection: 'column' })};
`
const Text = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ fontSize: '16px' })};
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ marginTop: '10px', width: '85%' })}; 
`;
const Option = styled.option`
    ${mobile({ width: '100%' })};
`

const ProductList = () => {

  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterWrapper>
        <Filter>
          <Text>Filter Products</Text>
          <Select name='color' onChange={handleFilter}>
            <Option defaultValue disabled>
              Color
                        </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size' onChange={handleFilter}>
            <Option defaultValue disabled>
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
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterWrapper>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  )
}

export default ProductList;
