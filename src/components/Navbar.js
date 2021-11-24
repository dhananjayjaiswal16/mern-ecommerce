import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Container = styled.div`
    
    ${mobile({ height: '50px' })};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFAFA;
    ${mobile({ padding: '5px 5px' })};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    cursor: pointer;
    ${mobile({ display: 'none' })};
`
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 6px;
    border: 0.5px solid #d3d3d3;
    ${mobile({ margin: '0px', width: '65px', fontSize: '12px', padding: '3px' })};
`
const Input = styled.input`
    border: none;
    width: 100%;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ marginLeft: '10px' })};
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
    ${mobile({ flex: '2' })};
`
const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 40px;
    font-weight: 300;
    ${mobile({ marginLeft: '15px' })};
`
const CartIcon = styled.div`
    cursor: pointer;
    background-color: #00b5b5;
    margin-left: 40px;
    padding: 5px 10px;
    border-radius: 20px;
    ${mobile({ marginLeft: '15px' })};
    display: flex;
    transition: .3s ease-in-out;
    &:hover{
        background-color: #006b6b;
        transform: scale(1.08);
        
    }
`
const Quantity = styled.span`
    color: #fff;
    margin-right: 5px;
`

const Navbar = () => {
    const { quantity } = useSelector(state => state.cartSlice)
    // console.log(quantity);

    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>FR</Language>
                    <SearchBar>
                        <i className="fas fa-search"></i>
                        <Input placeholder='Search'></Input>
                    </SearchBar>
                </Left>
                <Center>
                    <Logo>DJ.</Logo>
                </Center>
                <Right>
                    <Link to='/login'>
                        <MenuItem>LOGIN</MenuItem>
                    </Link>
                    <Link to='/register'>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to='/cart'>
                        <CartIcon>
                            <Quantity>{quantity}</Quantity>
                            <i className="fas fa-shopping-cart" style={{ color: '#fff' }}></i>
                        </CartIcon>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
