import React from 'react'
import "./Location.css"

const Location = () => {
    return (
        <div className='Location'>
            <div className="Page-title">
                <h3>Location</h3>
            </div>
            <div className="location-box">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.297727636259!2d77.45119567536406!3d28.470579091416866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9ef0e837dc5%3A0x3142a2640c89e38c!2sGodrej%20Jardinia%2C%20146%20Sector%2C%20Noida!5e0!3m2!1sen!2sin!4v1715339137014!5m2!1sen!2sin"></iframe>
            </div>
        </div>
    )
}

export default Location
