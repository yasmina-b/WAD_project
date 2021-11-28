import React, {Fragment, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
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

const ProductTitle = styled.h4`
    margin:0;
    padding:0;
`
const ProductDescription = styled.p`
    margin: 0;
    padding: 0;
`
const Button =styled.button`
    border: none;
    padding: 15px 15px;
    background-color: #aec999;
    color: black;
    cursor: pointer;
    text-align: center; 
    font-weight: bold; 
    margin: auto;   
`

const ProductPrice = styled.small``

const DeleteProduct = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try{
            const res = await axios.get('/products');
            setProducts(res.data);
        }catch(err){
            console.error(err)
        }
    }
    useEffect(() => {
        getAllProducts()    
    }, [])

    const deleteProduct = (_id) => {
        axios.delete(`http://localhost:5000/api/products/${_id}`);
        history.push('/admin/list-of-products');
    }
    return (
        <Container>
            <Wrapper>
                <Title>List of the products</Title>
                <List>
                    {products && products.map((product) => (
                        <ListItem>
                            <ProductTitle>
                                Name: {product.title}
                            </ProductTitle>
                            <ProductDescription>
                                Description: {product.desc}
                            </ProductDescription>
                            <ProductPrice>
                                Price:  {product.price}$
                            </ProductPrice>
                            <ProductPrice>
                                Quantity:  {product.quantity}
                            </ProductPrice>
                            <Button style={{marginTop: '0px'}} onClick={() =>
                                deleteProduct(product._id)}>
                                Delete product
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        </Container>
    )
}

export default DeleteProduct;