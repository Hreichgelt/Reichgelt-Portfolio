import React from "react";
import Nav from '../components/Nav'
import HomeBody from '../components/HomeBody'
import Footer from "../components/Footer";
import HeroWrapper from "../components/HeroWrapper";

const Home = () => {
    return (
        <div>
            <Nav />
            <HeroWrapper>
                <HomeBody />
            </HeroWrapper>
            <Footer />
        </div>
    )
}

export default Home