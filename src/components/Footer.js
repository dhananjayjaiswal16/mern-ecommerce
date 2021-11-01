import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    margin-top: 15px;
    background-color: #FFFAFA;
    padding-top: 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
`
const Logo = styled.h1``

const Description = styled.p`
    margin: 10px 0;
`

const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    
`

const Icon = styled.div`
    margin: 5px 4px;
    width: 15px;
    height: 15px;
    background-color: ${props => props.color};
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;

`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
`
const Contact = styled.div`
    margin-bottom: 20px;
`
const Payment = styled.img`
    width: 100%;
    position: relative;
    top: -20px;
    left: -14px;
`
const Dev = styled.div`
    display: flex;
    justify-content: center;
    background-color: #000;
`
const DevDesc = styled.p`
    color: #FAF9F6;
    
`

const Footer = () => {
    return (
        <>
            <Container>
                <Left>
                    <Logo>E-commerce</Logo>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Description>
                    <SocialMediaContainer>
                        <Icon color='#3b5999'><i className="fab fa-facebook-square"></i></Icon>
                        <Icon color='#e4405f'><i className="fab fa-instagram"></i></Icon>
                        <Icon color='#e60023'><i className="fab fa-pinterest"></i></Icon>
                        <Icon color='#55acee'><i class="fab fa-twitter"></i></Icon>

                    </SocialMediaContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Reach out to us</Title>
                    <Contact><i style={{ marginRight: '5px' }} className="fas fa-map-marker-alt" />Bhonabhai Bldg, 17/21a Atmaram Marchant Road, Kalbadevi, Mumbai</Contact>
                    <Contact><i style={{ marginRight: '5px' }} className="fas fa-phone-alt" />+91 2222403047</Contact>
                    <Contact><i style={{ marginRight: '5px' }} className="fas fa-envelope" />contact@ecommerce.com</Contact>
                    <Payment src='https://ecoheater.ie/wp-content/uploads/2018/10/cards-.jpg' />
                </Right>
            </Container>
            <Dev>
                <DevDesc>Built with ❤️ by <a style={{ textDecoration: 'none', color: '#87CEEB' }} href="https://github.com/dhananjayjaiswal16">DJ</a></DevDesc>
            </Dev>
        </>
    )
}

export default Footer;
