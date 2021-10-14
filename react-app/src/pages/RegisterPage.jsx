import styled from 'styled-components';

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
    width: 40%;
    padding: 20px;
`
const Form  = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    font-weight: bold;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 70%;
    border: none;
    padding: 15px 20px;
    background-color: #aec999;
    color: black;
    cursor: pointer;
    text-align: center; 
    font-weight: bold; 
    margin: auto;
`
function RegisterPage() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT.</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                         By creating an account, I consent to the processing of my personal
                             data in accordance with the <b>PRIVACY POLICY</b>
                     </Agreement>
                    <Button>REGISTER NOW</Button>
                </Form>
            </Wrapper>
            
        </Container>
    )
}

export default RegisterPage
