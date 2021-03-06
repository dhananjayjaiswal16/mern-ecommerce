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

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);



  const url = cat
    ? `${process.env.REACT_APP_BACKEND_URL}/product?category=${cat}`
    : `${process.env.REACT_APP_BACKEND_URL}/product`;
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
  }, [cat]);




  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            //console.log(key, value);
            return item[key].includes(value)
          }

          )
        )
      );
    }
  }, [products, cat, filters]);


  useEffect(() => {

    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a.createdAt - b.createdAt))
      )
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a.price - b.price))
      )
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (b.price - a.price))
      )
    }

  }, [sort]);


  // console.log(products);
  //console.log(filteredProducts);
  return (
    <Container>
      {cat ? (filteredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))) : (products.slice(0, 8).map((product) => (
        <Product product={product} key={product.id} />
      )))}
    </Container>
  )
}

export default Products;
