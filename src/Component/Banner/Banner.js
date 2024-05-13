import React, { useEffect } from 'react'
import bannerimg from "../../Assets/banner.jpg"
import banner2 from "../../Assets/CAtegory/joging.webp"
import "./Banner.css"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <ReactOwlCarousel
                        loop={Infinity}
                        items={1}
                        nav={false}
                        dots={false}
                        autoplay={true}
                        autoplayTimeout={3000}
                        autoplaySpeed={1000}
                        smartSpeed={1000}
                    >
                        <img src={bannerimg} alt="fairfox eon" />
                        <img src={banner2} alt="fairfox eon" />
                    </ReactOwlCarousel>
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h5>At Sec 146, Noida</h5>
                        <h2>Godrej Jardinia</h2>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        <p>Premium 3 BHK & 4 BHK Residences Starts <span> ₹ 4.75 Cr*</span> </p>
                        <p>Possession in December 2028</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
