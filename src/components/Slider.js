import React from 'react'
import styled from 'styled-components'
import slideImg1 from '../images/slider-home-img.jpeg'

const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
    height: calc(100vh - 88px);
    position: relative;
    display: flex ;
`

const Arrow = styled.div`
    height: 45px;
    width: 45px;
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
    display: flex;
    justify-content: center;
    
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;
    background-color: ${props => props.bg};
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-size: 60px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border: 2px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: teal;
        color: #fff;
        border: 2px solid teal;
    }
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <i className="fas fa-caret-left" style={{ fontSize: '20px' }} />
            </Arrow>
            <Wrapper>
                <Slide bg='#f5fafd'>
                    <ImageContainer>
                        <Image src={slideImg1}>

                        </Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>Get your favourite products at 30% discount!!</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg='#f5fafd'>
                    <ImageContainer>
                        <Image src={slideImg1}>

                        </Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>Get your favourite products at 30% discount!!</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg='#f5fafd'>
                    <ImageContainer>
                        <Image src={slideImg1}>

                        </Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>Get your favourite products at 30% discount!!</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <i className="fas fa-caret-right" style={{ fontSize: '20px' }} />
            </Arrow>
        </Container>
    )
}

export default Slider;
