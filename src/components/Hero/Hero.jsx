import React from 'react'
import "./Hero.css"
import { assets } from '../../assets/assets'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero-text">
                <h2 className='hero-text-1'>find Trending <span>Keywords</span></h2>
                <p className='hero-text-2'>for your</p>
                <p className='hero-text-3'>
                    <Typewriter
                        words={[
                            'WEBSITE BLOGS',
                            'YOUTUBE VIDEOS',
                            'INSTAGRAM REELS',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="."
                        typeSpeed={80}
                        deleteSpeed={70}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <div className="hero-img">
                <img src={assets.hero} alt="" />
            </div>
        </div>
    )
}

export default Hero
