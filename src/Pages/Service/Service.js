import React from 'react';
import './Service.css';
// import Image from 'react-bootstrap/Image'


function AboutOwner() {
    return(
        <div className='ServiceBody'>
            <div className='service-header'>
            <label className='service-header-text'><strong>Our Service</strong></label>
            </div>
            <div className='service-tag'> 
                {/* <label>Service Body</label> */}
                <div className='box-tag'>
                    <div className='box-img-tag'>
                    {/* <label>A</label> */}
                    <img src='./clock.svg' alt="React Logo" className='img-css'/>
                    </div>
                    <div className='service-text-tag'>
                        <label className='service-box-header'> <strong> Clock Manufacturing </strong> </label>
                        <p className='text-css'>
                            Although corporate gifting also forms a sizeable chunk of sales, the bulk orders from corporate companies have dried up this year due to the pandemic eroding their revenues.
                        </p>
                    </div>
                </div>
                <div className='box-tag'>
                    <div className='box-img-tag'>
                    {/* <label>A</label> */}
                    <img src='./frame.svg' alt="React Logo" className='img-css'/>
                    </div>
                    <div className='service-text-tag'>
                        <label className='service-box-header'> <strong> Photo Frame </strong> </label>
                        <p className='text-css'>
                            Although corporate gifting also forms a sizeable chunk of sales, the bulk orders from corporate companies have dried up this year due to the pandemic eroding their revenues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOwner;

                    