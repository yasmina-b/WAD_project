import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  padding: 70px;
  margin: 3px;
  height: 80vh;
  position: relative;
  background : linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),url("https://www.pngitem.com/pimgs/m/38-380511_eye-makeup-png-for-kids-transparent-background-eyeshadow.png")center ;
  background-size: cover;
`
const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
`;
const ProductsIntro = () => {
    return(
        <Container>
            <Title>PRODUCTS WE LOVE TO SHOP</Title>
        </Container>

)}

export default ProductsIntro