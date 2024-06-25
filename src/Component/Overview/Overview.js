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
                        <Form btntxt={"Book A Site Visit"}/>
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Located in the thriving city of Noida, specifically Sector-146, Godrej Jardinia captures the best of modern life, blended with the beauty of nature. This luxury residential enclave brings a whole new meaning to the urban lifestyle as it is a perfect blend of architectural designs and landscape. Making use of outstanding design, the apartments provide an elegant and functional look and feel through the use of impressive materials in the structure.</p>
                            <p>In its every design and decoration, from a majestic frontage complete with trims and carvings to the gardens that bespeak the well-manicured estates in Europe, the generosity of an image is conveyed. People get to live a kind of life that is totally extravagant and full of comforts, and the society that is planned tries to incorporate comfort at every step with petrifying standards of global standards in comfort.                             </p>
                            <p>Being a Class A Commercial Building designed with an aesthetic influence of European architectural concepts integrated with a modern luxurious touch accompanied by full-fledged comforts, Godrej Jardinia offers a lavish lifestyle in the prime location of Noida.</p>
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
