import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { productsData } from '../sampleData'
import Product from './Product';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
`

const Products = ({ cat, filter, sort }) => {
    const [products, setProducts] = useState([]);



    const url = cat
        ? `http://localhost:8000/api/product?category=${cat}`
        : 'http://localhost:8000/api/product';
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(url);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        getProducts();
    }, [cat])
    return (
        <Container>
            {productsData.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </Container>
    )
}

export default Products;
