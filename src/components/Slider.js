import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 88px);
    background: turquoise;
    position: relative;
    display: flex ;
`

const Arrow = styled.div`
    background-color: #fff7f7;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 0; bottom: 0;
    margin: auto ;
    left: ${props => props.direction === 'left' && '12px'};
    right: ${props => props.direction === 'right' && '12px'}; 
`
const Wrapper = styled.div`
    height: 100%;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <i className="fas fa-caret-left" />
            </Arrow>
            <Arrow direction='right'>
                <i className="fas fa-caret-right" />
            </Arrow>
        </Container>
    )
}

export default Slider;
