import React from 'react'
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    background-color: #aec999;
`
const Wrapper = styled.div`
    padding: 10px 20 px;
    display: flex;
    justify-content : space-between;

`
const Left = styled.div`
    flex: 1;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;

`
const NavigationBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                </Left>
                <Center>
                    <Logo>CLEANBEAUTY.</Logo>
                </Center>
                <Right>
                    <Link to={"/pages/RegisterPage"}>
                         <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to={"/pages/LoginPage"}>  
                        <MenuItem>Sign In</MenuItem>
                    </Link>
                   <MenuItem>
                        <ShoppingCartOutlined/>
                   </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavigationBar
