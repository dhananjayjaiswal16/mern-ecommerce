import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 25px;
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

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DJ</Logo>
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
            <Right></Right>
        </Container>
    )
}

export default Footer;
