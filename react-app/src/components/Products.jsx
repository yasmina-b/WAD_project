import {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios'
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([])

  const getItems = async () => {
    try {
      const res = await axios.get('/products');
      setProducts(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getItems();
  },[])


  return (
    <Container>
      {products && products.map((item) => (
        <Product item={item} key={item._id}/>
      ))}
    </Container>
  );
};

export default Products;