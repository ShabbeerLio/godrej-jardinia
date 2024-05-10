import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about1.jpg"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
            {/* <div className="about-title">
                <h1>GODREJ JARDINIA</h1>
                <p>Rera No : UPRERAPRJ303390</p>
                <span>Office Space and Retail Shop Noida Sector 146</span>
                <h4>INVESTMENT STARTS @ <span>₹4.25 Cr</span> LAKH*</h4>
                <span>Booking Amount only @ ₹4.25 Cr</span>
            </div> */}
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h3>GODREJ JARDINIA NOIDA, Sector 146 Noida Expressway</h3>
                            <p>Welcome to GODREJ JARDINIA, It Properties plans to woo home-buyers and investors alike with its quality residential project located at a strategic location at Sector 146 in Noida. They have announced that they have purchased two land parcels in Sector 146, Noida, for a residential township. Not only does Godrej Jardinia Noida project provide space-efficient plans, but it also has green landscapes. The overall experience would be complete serenity.</p>
                            <p>With its unparalleled features and amenities, GODREJ JARDINIA redefines the concept of commercial spaces, offering a harmonious blend of functionality, aesthetics, and luxury. Elevate your business to new heights of success and prestige at GODREJ JARDINIA, where every detail is meticulously crafted to enhance your corporate experience. Welcome to a world of commercial excellence in Greater Noida's most prestigious address.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="GODREJ JARDINIA Noida" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
