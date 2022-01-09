import styled from "styled-components";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { Link } from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import React from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #aec999;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const {user, setUser} = React.useContext(AuthContext);
  const {cart, customSetCart } = React.useContext(AuthContext);

    const removeItemFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        customSetCart(newCart);
    };

  const totalPrice = cart.reduce((accumulator, current) => accumulator + current.price, 0);
  return (
    <Container>
      <NavigationBar />
      <Wrapper>
        <Title>YOUR CLEANBEAUTY. BAG</Title>
        <Top>
            <Link to={"/pages/ProductsPage"}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cart.map((product, index) => {
                            return (
            <Product>
              <ProductDetail>
                <Image src={product.image}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Button onClick={() => removeItemFromCart(index)}> REMOVE FROM CART </Button>
                </ProductAmountContainer>
                <ProductPrice>${product.price}</ProductPrice>
              </PriceDetail>
            </Product>
            )})}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 12.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -12.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
                 <Link to={"/pages/Checkout"}>
                <Button>CHECKOUT NOW</Button>
                </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;