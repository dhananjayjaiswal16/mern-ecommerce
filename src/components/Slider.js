import React, { useState } from 'react'
import styled from 'styled-components'
// import slideImg1 from '../images/slider-home-img.jpeg'
import { sliderItems } from '../sampleData'
import { mobile } from '../responsive';

const Container = styled.div`
    overflow-x: hidden;
    width: 100%;
    height: calc(100vh - 88px);
    position: relative;
    display: flex ;
    ${mobile({ paddingBottom: '10px', height: 'calc(100vh - 50px)', width: '100vw', paddingBottom: '10px' })};
`

const Arrow = styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0; bottom: 0;
    margin: auto ;
    z-index: 2;
    left: ${props => props.direction === 'left' && '12px'};
    right: ${props => props.direction === 'right' && '12px'}; 
    ${mobile({
    border: 'none',
    backgroundColor: 'white',
    height: '30px',
    width: '30px',
    borderRadius: '50%'
})}
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
    ${mobile({
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
})};
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(mobile({
    width: '100%', flex: '1', height: '70%'
}))};
`
const Image = styled.img`
    height: 80%;
    ${mobile({ height: '100%', width: '100vw' })}
`

const InfoContainer = styled.div`
    flex: 1;
    ${mobile({
    flex: '1', textAlign: 'center', marginTop: '20px', display: 'flex',
    justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '20%'
})};
`
const Title = styled.h1`
    font-size: 30px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({ fontSize: '12px', fontWeight: '400', margin: '20px 0px' })};
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
                        <Slide bg={item.bg} key={item.id}>
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
