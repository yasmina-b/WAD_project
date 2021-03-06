import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  background : linear-gradient;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PlatformsItems = ({ item }) => {
  return (
    <Container>
        <a href={item.link}>
            <Info>
                <Image src={item.img}/>
            </Info>
      </a>
    </Container>
  );
};

export default PlatformsItems;