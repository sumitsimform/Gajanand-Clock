import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';
import fire from '../firebase';
import history from '../history';
 const SideBar = props => {
  return (
    <Menu >
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/HookExample">
        Hook
      </a>
      <a className="menu-item" href="/Profile">
        Profile
      </a>
      <a className="menu-item" href="/Form">
        Form
      </a>
      <a className="menu-item" href="/AddPhoto">
      Add Photo
      </a>
      <a className="menu-item" href="/ShowImages">
      Show Images
      </a>
      {/* <a className="menu-item" href="/Form">
        Logout
      </a> */}
      <div className='menu-item' onClick={() => {
                fire.auth().signOut().then(() => {
                  // Sign-out successful.
                  alert('Sign-out successful...');
                  history.push({pathname:'/'});
                }).catch((error) => {
                  // An error happened.
                  console.log(error.message);
                });
      }}>
          <label className='logOut-text-sideBar'>Logout</label>
      </div>
    </Menu>
  );
};

// className='logOut-text'

export default SideBar;