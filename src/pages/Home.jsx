import React from 'react'
import "./Home.css"
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Grow from '../components/Grow/Grow'
import Footer from '../components/Footer/Footer'
import SocialMedia from '../components/Social Media/SocialMedia'
import Benefits from '../components/Benefits/Benefits'

const Home = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <Hero />
            <SocialMedia />
            <Grow />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Home
