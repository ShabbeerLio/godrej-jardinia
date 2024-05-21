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
            <div className="about-title">
                <h1>GODREJ JARDINIA</h1>
                <p>RERA No.: UPRERAPRJ288309/04/2024 </p>
                <span>3/4 BHK Ultra Luxury Apartments</span>
                <h4>European-Inspired Architecture</h4>
            </div>
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                        <div className="about-detail">
                            <h3>GODREJ JARDINIA NOIDA, Sector 146 Noida Expressway</h3>
                            <p>Godrej Jardinia, a pinnacle of ultra-luxury living, is an exquisite residential project steeped in the captivating allure of European aesthetics. Set against the backdrop of Sector-146 in Noida, this development embodies the essence of sophistication and elegance. Inspired by the timeless charm of European architecture and design, every aspect of Godrej Jardinia is meticulously curated to evoke a sense of opulence and refinement.</p>
                            <p>From its grand façade adorned with intricate detailing to its impeccably landscaped gardens reminiscent of European estates, every corner exudes an aura of grandeur. Residents are treated to a lifestyle of unparalleled luxury, with lavish amenities and world-class facilities meticulously integrated into the fabric of the community. With its fusion of European-inspired aesthetics and contemporary comforts, Godrej Jardinia stands as an epitome of indulgent living in the heart of Noida.</p>
                        </div>
                        <div className="about-button">
                            <a href="/#site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </a>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="GODREJ JARDINIA NOIDA" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
