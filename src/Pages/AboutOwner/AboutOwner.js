import React from 'react';
import './AboutOwner.css';
import Image from 'react-bootstrap/Image'

function AboutOwner() {
    return(
        <div className='Body'>
            <div className='About-header'>
            <label className='About-header-text'><strong>About Owner</strong></label>
            </div>
            <div className='About-tag'> 
                <div className='content-tag'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='Owner-img-tag'>
                    <Image src="user.png" thumbnail className='Owner-img' width='350' height='350' />
                </div>
            </div>
        </div>
    )
}

export default AboutOwner;
