import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice'

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
    text-decoration: none;
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quantity } = useSelector(state => state.cartSlice)
  // console.log(quantity);
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    navigate('/login');
  }

  return (
    <Container>
      <Wrapper>

        <Left>
          <SearchBar>
            <i className="fas fa-search"></i>
            <Input placeholder='Search'></Input>
          </SearchBar>
        </Left>
        <Center>
          <Logo>DJ.</Logo>
        </Center>
        <Right>
          <Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
            <CartIcon>
              <Quantity>{quantity}</Quantity>
              <i className="fas fa-shopping-cart" style={{ color: '#fff' }}></i>
            </CartIcon>
          </Link>
          {/* <Link to='/login' onClick={handleLogout} style={{ textDecoration: 'none', color: 'inherit' }}> */}
          <MenuItem onClick={handleLogout}><i style={{ fontSize: '18px' }} className="fas fa-sign-out-alt"></i></MenuItem>
          {/* </Link> */}
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
