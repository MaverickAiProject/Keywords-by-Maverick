import React, { useContext } from 'react'
import "./SocialMedia.css"
import { Context } from '../../context/Context'
import ReactLoading from 'react-loading';
import { COUNTRIES, INDUSTRIES } from '../../utils/hashtagsConsts';

const SocialMedia = () => {

    const {
        setSpecialInput, specialResult,
        specialLoading, generateSpecialHashtags,
        specialInput, country, setCountry,
        industry, setIndustry, } = useContext(Context)

    const countries = COUNTRIES;
    const industries = INDUSTRIES

    const resultData = specialResult.split(',')

    return (
        <div className='social-media'>
            <p className='SM-heading'>FIND TRENDING <span>KEYWORDS</span> WITH AI</p>
            <div className='select-SM'>
                <div className="select-SM-app">
                    <p className='select-SM-head'>SELECT COUNTRY</p>
                    <div className="select-SM-Links">
                        <select onChange={(e) => setCountry(e.target.value)} value={country} className="select-dropdown">
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="select-SM-app">
                    <p className='select-SM-head'>SELECT INDUSTRY</p>
                    <div className="select-SM-Links">
                        <select onChange={(e) => setIndustry(e.target.value)} value={industry} className="select-dropdown">
                            {industries.map((industry, index) => (
                                <option key={index} value={industry}>{industry}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="select-topic">
                <input type="text" onChange={(e) => setSpecialInput(e.target.value)} value={specialInput} placeholder="What is your topic?" className="topic-input" />
                <button onClick={() => generateSpecialHashtags()} className="generate-btn">Find Keywords</button>
            </div>

            <div className="hashtags-SM">
                <div className="hastags-SM-text">
                    <div className='hashtags-SM-result'>{specialLoading ?
                        <div className='specialLoader'>
                            <ReactLoading type={"bars"} color={"#34ad81"} height={'20%'} width={'20%'} />
                        </div>
                        :
                        <ul className='result-list'>
                            {resultData.map((item, index) => (
                                <li key={index + 1}><span>{index + 1}. </span> {item}</li>
                            ))}
                        </ul>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
