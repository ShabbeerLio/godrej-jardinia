import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2994576530423!2d77.45123127549492!3d28.47052697575353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9a13d3f6a61%3A0x451ed1c0b331b11e!2sJardinia%20Noida!5e0!3m2!1sen!2sin!4v1719667124453!5m2!1sen!2sin" ></iframe>
            </div>
        </div>
    )
}

export default Location
