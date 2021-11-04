import React from 'react'

import styled from 'styled-components';
import { mobile } from '../../responsive';
import Announcement from '../Announcement';
import Navbar from '../Navbar';

const Container = styled.div`
    height: calc(100vh - 88px);
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

const Link = styled.a`
  margin: 0px 5px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  width: 50%;
`;

const Login = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Container>


                <Wrapper>
                    <Title>Login to your account</Title>
                    <Form>
                        <Input placeholder='Email' />
                        <Input placeholder='Password' />

                        <Button>Login</Button>
                    </Form>

                    <LinkContainer>
                        <Link side='left'>Forgot Password?</Link>
                        <Link side='right'>Don't have an Account?</Link>
                    </LinkContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Login;
