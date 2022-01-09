import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import React from 'react';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background : linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),url("https://i.pinimg.com/564x/e2/ed/c0/e2edc074ab6ad4e2121bd3cf35cce951.jpg") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    font-weight: bold;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #aec999;
    color: black;
    cursor: pointer;
    margin-bottom: 10px;
    text-align: center;
    margin: auto;
`;

const Redirect = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
  margin: auto;
`;

function LoginPage() {
    const history = useHistory();

    const {setUser} = React.useContext(AuthContext);

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await axios.post('/login',{
            username,
            password
        })

        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));

        if(res.status === 200){
            history.push('/')
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN.</Title>
                <Form>
                    <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={(e) => handleLogin(e)}>LOGIN</Button>
                    <Link to={"/pages/RegisterPage"}>
                        <Redirect>Don't have an account yet? Join our CLEANBEAUTY. community</Redirect>
                        </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LoginPage
