import styled from 'styled-components';
import { BrowserRouter, Link , Router, Route, Switch} from 'react-router-dom';

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
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN.</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link to={"/pages/RegisterPage"}>
                        <Redirect>Don't have an account yet? Join our CLEANBEAUTY. community</Redirect>
                        </Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LoginPage
