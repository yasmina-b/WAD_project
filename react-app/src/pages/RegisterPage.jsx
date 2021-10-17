import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
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
    const history = useHistory();

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await axios.post('/register', {
                        name,
                        lastname,
                        username,
                        email,
                        password,
                        confirmPassword
                    })

        if(res.status === 201){
            history.push('/pages/LoginPage')
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT.</Title>
                <Form>
                    <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder="last name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                    <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Input placeholder="confirm password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <Agreement>
                         By creating an account, I consent to the processing of my personal
                             data in accordance with the <b>PRIVACY POLICY</b>
                     </Agreement>
                    <Button onClick={(e) => handleRegister(e)}>REGISTER NOW</Button>
                </Form>
            </Wrapper>
            
        </Container>
    )
}

export default RegisterPage
