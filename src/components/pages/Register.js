import React from 'react'
import styled from 'styled-components';
import Announcement from '../Announcement';
import Navbar from '../Navbar';

const Container = styled.div`
    height: calc(100vh - 88px);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* https://images.unsplash.com/photo-1529903056346-94341d9428e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60 */
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://besthqwallpapers.com/Uploads/23-7-2020/138026/thumb2-rakul-preet-singh-indian-actress-photoshoot-portrait-indian-fashion-model.jpg")
      center;
  background-size: cover;
`
const Wrapper = styled.div`
    width: 40%;
    
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`

const Title = styled.h2`
    font-size: 22px;
    font-weight: 500;
`

const Input = styled.input`
    flex: 1;
    margin: 20px 10px 0px 0;
    padding: 8px;
`

const Agreement = styled.span`
    margin: 20px 0;
    width: 100%;
`

const Button = styled.button`
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

const Register = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Container>


                <Wrapper>
                    <Title>Create An Account</Title>
                    <Form>
                        <Input placeholder='First Name' />
                        <Input placeholder='Last Name' />
                        <Input placeholder='Email' />
                        <Input placeholder='Password' />
                        <Input placeholder='Re-enter Password' />
                        <Agreement>
                            By creating an account, I agree to share my personal info
                    </Agreement>
                        <Button>Create</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default Register;
