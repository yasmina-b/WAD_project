import React from 'react'
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

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
    const {user} = React.useContext(AuthContext);
    return (
        <Container>
            <Wrapper>
                <Left>
                </Left>
                <Center>
                    <Link to='/' style={{color: 'black'}}>
                    <Logo>CLEANBEAUTY.</Logo>
                    </Link>
                </Center>
                <Right>
                {user && user.isAdmin ? ( <Link to="../admin/dashboard" style={{ color: 'black'}}>
                    <MenuItem>CleanBeauty Admin</MenuItem>
                    </Link>) : ("")}
                    <Link to="/pages/RegisterPage" style={{color: 'black'}}>
                         <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to="/pages/LoginPage" style={{color: 'black'}}>  
                        <MenuItem>Sign In</MenuItem>
                    </Link>
                   <MenuItem>
                        <Link to="/product/pages/Cart" style={{color: 'black'}}>
                             <ShoppingCartOutlined/>
                        </Link>
                   </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavigationBar
