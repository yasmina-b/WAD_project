import { MailOutline, Room } from '@material-ui/icons'
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    height: 160px;
    background-color: #aec999;
`
const Left = styled.div`
    flex: 1;
    display: flex;
`
const Logo = styled.h1`
    text-align: center;
`
const Desc = styled.p`
    margin: 20px 0px;
    text-align: center;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;

`
const Title = styled.h3`
    margin-bottom: 30px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Right = styled.div`
    flex: 1;
`
function Footer() {
    return (
        <Container>
            <Left>
            </Left>
            <Center>
            <Logo>CLEANBEAUTY.</Logo>
                <Desc>In beauty and clean products we trust!</Desc>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                 <Room style={{marginRight:"10px"}}/>Victory Square nr.100
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>contact@cleanbeauty.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
