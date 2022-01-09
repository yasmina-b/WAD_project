import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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
const Button = styled.button`
    border: none;
    padding: 15px 20px;
    background-color: #aec999;
    color: black;
    cursor: pointer;
    text-align: center; 
    font-weight: bold; 
    margin: auto;
`

const CreateProduct = () => {
    const history = useHistory();

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("");

    const submitProduct = async (e) => {
        e.preventDefault();
        try{
            await axios.post('/products', {
                title, desc, quantity, price, image
            })
            history.push('/admin/list-of-products')
        }catch(err){
            console.error(err)
        }
    }   

    return (
        <Container>
            <Wrapper>
                <Title>Add Product</Title>
                <Form style={{display:'flex', flexDirection: 'column'}}>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..."/>
                    <Input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description..."/>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '24px'}}>
                        Quantity: <Button onClick={(e) => {
                            e.preventDefault();
                            if(quantity>0){
                                setQuantity(prev => prev-1)
                            }
                        }}>-</Button>{" "+quantity+" "} <Button onClick={(e) => {e.preventDefault(); setQuantity(prev => prev+1)}}>+</Button>
                    </div>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price..."/>
                    <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image..."/>

                    <Button style={{marginTop: '24px'}} onClick={(e) => {
                        submitProduct(e);
                    }}>
                        Create product
                        </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default CreateProduct
