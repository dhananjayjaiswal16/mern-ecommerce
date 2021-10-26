import React, { useState } from 'react'
import styled from 'styled-components'
// import slideImg1 from '../images/slider-home-img.jpeg'
import { sliderItems } from '../sampleData'

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
    z-index: 2;
    left: ${props => props.direction === 'left' && '12px'};
    right: ${props => props.direction === 'right' && '12px'}; 
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    transform: translateX(${props => props.slideNum * -100}vw);
    transition: all 1s ease;
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
    const [slideNumber, setSlideNumber] = useState(0);

    const handleSlider = (direction) => {
        if (direction === 'right') {
            if (slideNumber < 2) {
                setSlideNumber(slideNumber + 1);
            } else {
                setSlideNumber(0);
            }
        } else {
            if (slideNumber > 0) {
                setSlideNumber(slideNumber - 1);
            } else {
                setSlideNumber(2);
            }
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleSlider('left')}>
                <i className="fas fa-caret-left" style={{ fontSize: '20px' }} />
            </Arrow>
            <Wrapper slideNum={slideNumber}>
                {
                    sliderItems.map((item) => (
                        <Slide bg={item.bg}>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>Shop Now</Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction='right' onClick={() => handleSlider('right')}>
                <i className="fas fa-caret-right" style={{ fontSize: '20px' }} />
            </Arrow>
        </Container>
    )
}

export default Slider;
