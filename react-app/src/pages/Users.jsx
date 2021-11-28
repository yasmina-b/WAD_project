import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
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
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    font-weight: bold;
`

const List = styled.ul`
    margin-top; 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
`

const Name = styled.h4`
    margin:0;
    padding:0;
`
const LastName = styled.h4`
    margin:0;
    padding:0;
`
const UserName = styled.h4`
    margin:0;
    padding:0;
`
const Email = styled.h4`
    margin:0;
    padding:0;
`

const Users = () => {
    const [users, setUsers] = useState([]);

    const getAllUsers = async () => {
        try{
            const res = await axios.get('/users');
            setUsers(res.data);
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        getAllUsers()    
    }, [])

    return (
        <Container>
            <Wrapper>
                <Title>Users of CLEANBEAUTY.</Title>
                <List>
                    {users && users.map((user) => (
                        <ListItem>
                            <Name>
                                Name: {user.name}
                            </Name>
                            <LastName>
                                Last Name: {user.lastName}
                            </LastName>
                            <UserName>
                                Username: {user.username}
                            </UserName>
                            <Email>
                                Email: {user.email}
                            </Email>
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        </Container>
    )
}

export default Users;