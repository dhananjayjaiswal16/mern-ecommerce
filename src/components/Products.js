import React from 'react'
import styled from 'styled-components';
import { productsData } from '../sampleData'
import Product from './Product';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

const Products = () => {
    return (
        <Container>
            {productsData.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </Container>
    )
}

export default Products;
