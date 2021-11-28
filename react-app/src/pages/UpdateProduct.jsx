import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
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

const UpdateProduct = () => {
    const history = useHistory();
    const {id} = useParams();

    const [product, setProduct] = useState({})

    const getProductById = async () => {
        try {
            const res = await axios.get(`/products/find/${id}`);
            setProduct(res.data);
        } catch (err) {
            console.error(err)
        }
    }

    const updateProduct = async (e) => {
        e.preventDefault();
        
        try {
            await axios.put(`/products/${id}`, product)
            history.push('/admin/list-of-products');   
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getProductById();
    },[])

    return (
        <Container>
            <Wrapper>
                <Title>Update Product</Title>
                {product && (
                    <Form style={{display:'flex', flexDirection: 'column'}}>
                    <Input value={product.title} onChange={(e) => setProduct({...product, title:e.target.value})} placeholder="Title..."/>
                    <Input value={product.desc} onChange={(e) => setProduct({...product, desc:e.target.value})} placeholder="Description..."/>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '24px'}}>
                        Quantity: <Button onClick={(e) => {
                            e.preventDefault();
                            if(product.quantity>0){
                                setProduct({...product, quantity:product.quantity-1})
                            }
                        }}>-</Button>{" "+product.quantity+" "} <Button onClick={(e) => {e.preventDefault(); setProduct({...product, quantity:product.quantity+1})}}>+</Button>
                    </div>
                    <Input type="number" value={product.price} onChange={(e) => setProduct({...product, price:e.target.value})} placeholder="Price..."/>
                    <Input value={product.image} onChange={(e) => setProduct({...product, image:e.target.value})} placeholder="Image link..."/>

                    <Button style={{marginTop: '24px'}} onClick={(e) => {
                        updateProduct(e)
                    }}>
                        Update product
                        </Button>
                </Form>
                )}
            </Wrapper>
        </Container>
    )
}

export default UpdateProduct