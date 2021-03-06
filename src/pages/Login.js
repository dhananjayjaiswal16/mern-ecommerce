import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { mobile } from '../responsive';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { login } from '../redux/services/api';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
    height: calc(100vh - 35px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://s3-pixelphant-frontend.s3.amazonaws.com/frontend/Models-for-your-Product-Photography-best.jpg")
      center;
  background-size: cover;
`
const Wrapper = styled.div`
    width: 30%;
    ${mobile({ width: '82%' })};
    `

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    ${mobile({ width: '100%' })}
`

const Title = styled.h2`
    font-size: 22px;
    font-weight: 500;
`

const Input = styled.input`
    flex: 1;
    margin: 20px 0px 0px;
    padding: 8px;
`


const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    border: 2px solid #00a7a7;
    background-color: #00a7a7;
    color: white;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    &:disabled{
      cursor: not-allowed;
    }
    &:hover{
        background-color: teal;
        color: #fff;
        border: 2px solid teal;
    }
`

const LinkContainer = styled.div`
    text-align: right;
    margin-top: 8px;
`

const BottomLink = styled.a`
  margin: 0px 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  width: 50%;
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: 13px;
  width: 210px;
`

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const fromRegister = location?.state?.fromRegister;
  // console.log("fromRegister", fromRegister);
  const { isFetching, error } = useSelector((state) => state.userSlice);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  }
  return (
    <>
      <Announcement />
      <Container>
        <Wrapper>
          {fromRegister && <div style={{ marginBottom: '10px', fontSize: '16px', color: '#20B2AA' }} >You have been successfully registered, <br />Please Login to continue</div>}
          <Title>Login to your account</Title>
          <Form>
            <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />

            <Button onClick={handleClick}>Login</Button>
          </Form>

          <LinkContainer>
            <BottomLink side='left'>Forgot Password?</BottomLink>
            <BottomLink side='right'><Link to='/register' style={{ color: 'inherit' }}>Don't have an Account?</Link></BottomLink>
          </LinkContainer>
        </Wrapper>
      </Container>
    </>
  )
}

export default Login;
