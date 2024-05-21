import React, { useState } from 'react'
import "./Plans.css"
import floor1 from "../../Assets/FloorPlan/floor-1.jpg"
import floor2 from "../../Assets/FloorPlan/floor-2.jpg"
import floor3 from "../../Assets/FloorPlan/floor-3.jpg"
import FormFloat from '../Navbar/FormFloat'

const Plans = () => {

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };
    return (
        <div className='Plans'>
            <div className='Plans-main'>
                <h3>Floor Plans & Pricing</h3>
                <div className="plans-box">
                    <div className="plans-card">
                        <img src={floor1} alt="GODREJ JARDINIA Sector 146" onClick={formIsOpen} />
                        <div className="plans-card-title">
                            <p>2BHK @ <span>₹3.75 cr*</span></p>
                        </div>
                    </div>
                    <div className="plans-card">
                        <img src={floor2} alt="GODREJ JARDINIA NOIDA" onClick={formIsOpen} />
                        <div className="plans-card-title">
                            <p>3BHK @ <span>₹4.25 cr*</span></p>
                        </div>
                    </div>
                    <div className="plans-card">
                        <img src={floor3} alt="GODREJ JARDINIA NOIDA, Sector 146" onClick={formIsOpen} />
                        <div className="plans-card-title">
                            <p>4BHK @ <span>₹4.75 cr*</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {formopen && (
                <>
                    <FormFloat formIsClose={formIsClose} />
                </>
            )}
        </div>
    )
}

export default Plans
