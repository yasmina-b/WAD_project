import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import Platforms from '../components/Platforms';
import styled from "styled-components";

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    flex: 1;
    padding: 50px;
    font-size: 30px;
`

function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <Slider/>
            <Title>THE CLEAN BEAUTY CODE :</Title>
            <Categories/>
            <Title>MEET US ON OTHER PLATFORMS : </Title>
            <Platforms/>
            <Footer/>
        </div>
    )
}

export default HomePage;
