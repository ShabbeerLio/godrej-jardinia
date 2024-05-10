import React, { useEffect } from 'react'
import bannerimg from "../../Assets/banner.jpg"
import stickey from "../../Assets/strip-deskt.jpg"
import "./Banner.css"

import { FaBriefcase, FaCartShopping, FaMugSaucer, FaBed } from "react-icons/fa6";

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-heading">
                </div>
                <div className="banner-image">
                    <img src={bannerimg} alt="fairfox eon" />
                </div>
                {/* <div className="banner-bottom">
                    <div className="banner-items">
                        <div className="banner-card">
                            <FaBriefcase />
                            <div className="banner-card-detail">
                                <h4>Office Space</h4>
                                <p>Lockable Office Space</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaCartShopping />
                            <div className="banner-card-detail">
                                <h4>Retail Shop</h4>
                                <p>Lockable Retail Space</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaMugSaucer />
                            <div className="banner-card-detail">
                                <h4>Food Court</h4>
                                <p>Shop in Food Court</p>
                            </div>
                        </div>
                        <div className="banner-card">
                            <FaBed />
                            <div className="banner-card-detail">
                                <h4>Studio</h4>
                                <p>Studio Apartment</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="stickey">
                <img src={stickey} alt="" />
            </div>
        </>
    )
}

export default Banner
