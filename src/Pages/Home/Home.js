import React from 'react';
import './Home.css';
import {  Nav  } from 'react-bootstrap';
const { Link } = Nav;
// import Header from '../../Components/Header/header';
class Home extends React.Component {
  render() {
    return (
      <div className='homeBody'>
        <div className='left-tag'> 
          {/* <h1>COOl</h1> */}
          <img src='./home.png' alt='home-logo' />
        </div>
        <div className='right-tag'> 
          <h1>Welcome TO Clock World</h1>
          <p>We are the best Clock manufacturing Company.</p>
          <Nav>
            <Link href="#About"><input type='button' className='explore-btn'  value='Explore More '/></Link>
          </Nav>
          
        </div>
      </div>
    );
  }
}
export default Home;
