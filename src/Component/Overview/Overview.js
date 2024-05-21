import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import hall from "../../Assets/CAtegory/Gym.webp"
import food from "../../Assets/CAtegory/badminton.jpeg"
import walking from "../../Assets/CAtegory/IndoorGames.webp"
import Shopping from "../../Assets/CAtegory/swimingpool.webp"
import banhall from "../../Assets/CAtegory/hall.jpg"
import spot from "../../Assets/CAtegory/joging.webp"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Godrej Jardinia, nestled in Sector-146, Noida, stands as a testament to modern living intertwined with natural splendor. This residential enclave redefines urban lifestyle, offering a harmonious blend of contemporary architecture and lush green surroundings. Boasting meticulously crafted apartments, each space is thoughtfully designed to exude elegance and functionality.</p>
                            <p>Residents here enjoy a plethora of amenities designed to cater to every aspect of their well-being, from rejuvenating green spaces to state-of-the-art fitness facilities and recreational areas. With its strategic location, Godrej Jardinia provides seamless connectivity to major hubs across the city, ensuring convenience at every turn. Embracing sustainability and luxury in equal measure, this haven in Noida sets a new benchmark for modern urban living.</p>
                            {/* <p>Immerse yourself in cultural performances at the amphitheater or relax on the performance deck overlooking the landscape terraces and tree bosque seating areas. With features like vehicular and pedestrian boulevards, sculptural staircases for basement connections, FAIRFOX EON ensures that every aspect of your commercial experience is thoughtfully curated for success and enjoyment. Welcome to a new era of commercial sophistication at FAIRFOX EON, where every detail is designed to elevate your business and lifestyle.</p> */}
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={hall} alt="GODREJ JARDINIA NOIDA, Sector 146" />
                                    <p>Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={food} alt="GODREJ JARDINIA Noida Expressway" />
                                    <p>Badminton Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={Shopping} alt="JARDINIA NOIDA, Sector 146" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={walking} alt="GODREJ JARDINIA Sector 146 Noida Expressway" />
                                    <p>Indoor Games</p>
                                </div>
                                <div className="category-card">
                                    <img src={banhall} alt="GODREJ JARDINIA Sector 146 NOIDA" />
                                    <p>multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={spot} alt="GODREJ JARDINIA" />
                                    <p>Jogging Track</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
