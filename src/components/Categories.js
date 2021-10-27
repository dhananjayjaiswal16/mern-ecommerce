import React from 'react'
import styled from 'styled-components';
import { categories } from '../sampleData';
import Category from './Category';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Categories = () => {
    return (
        <Container>
            {categories.map((category) => (

                <Category category={category} key={category.id} />
            ))}
        </Container>
    )
}

export default Categories;
