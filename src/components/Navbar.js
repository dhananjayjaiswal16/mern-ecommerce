import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    cursor: pointer;
`
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 6px;
    border: 0.5px solid #d3d3d3;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.div`
    font-weight: 700;
    font-size: 25px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 40px;
    font-weight: 300;
`
const CartIcon = styled.div`
    cursor: pointer;
    background-color: #000;
    margin-left: 40px;
    padding: 5px 10px;
    border-radius: 20px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>FR</Language>
                    <SearchBar>
                        <i className="fas fa-search"></i>
                        <Input></Input>
                    </SearchBar>
                </Left>
                <Center>
                    <Logo>DJ's E-commerce</Logo>
                </Center>
                <Right>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>REGISTER</MenuItem>
                    <CartIcon>
                        <span style={{ marginRight: '5px', color: '#fff' }}>{5}</span>
                        <i className="fas fa-shopping-cart" style={{ color: '#fff' }}></i>
                    </CartIcon>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
