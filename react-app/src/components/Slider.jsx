import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined, Description } from '@material-ui/icons';
import {sliderItems} from "../data";
import React, { useEffect, useState } from "react";

const Container = styled.div`
    width: 100%
    height: 80vh;
    display: flex
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #C1E1C1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;   
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    width: 100%
`
const Slide = styled.div`
    min-width: 100%;
    height: 110vh;
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
    height: 96%;
    // flex: 1;
`
const Image = styled.img`
    height: 80%;

`
const InfoContainer = styled.div`
    // flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 50px;
    text-align: center;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    width: 300px;
    margin: auto;

`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }

    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(
                    <Slide>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>DISCOVER MORE</Button>
                        </InfoContainer>
                    </Slide>  
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
}

export default Slider
