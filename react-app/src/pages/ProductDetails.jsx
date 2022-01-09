import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Div = styled.div`
  {
    &::after {
      content: " "; //space inserted after each element
    }
  }
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const {cart, customSetCart} = React.useContext(AuthContext);

    const getProductById = async () => {
        try {
            const res = await axios.get(`/products/find/${id}`);
            setProduct(res.data);
            console.log(res.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getProductById();
    },[])

    const handleAddProduct = (newProduct) => {
      customSetCart([...cart, newProduct]);
  };

    if(!product) return <h1>Loading...</h1>

    return (
        <Container>
            <NavigationBar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>
                        {product.price}$
                    </Price>
                    <AddContainer>
                      <Div></Div>
                      <Link to={"pages/Cart"}>
                        <Button onClick={() => handleAddProduct(product)}>ADD TO CART</Button>
                        </Link>
                     </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default ProductDetails
