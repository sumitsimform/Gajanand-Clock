import React , { useState  } from 'react';
import './Header.css';
import { Navbar , Nav  } from 'react-bootstrap';
import history from '../History';
import   fire  from '../Firebase';
import Swal from 'sweetalert2';
import { useSelector , useDispatch } from 'react-redux';
import { setLogout  } from '../action/setLogged';
const { Brand , Collapse , Toggle } = Navbar;
const { Link } = Nav;



function Header() {

    const [navExpanded,setNavExpanded] = useState(false);
    const [navBar,setNavBar] = useState(false);
    const [windowInnerWidth , setWindowInnerWidth] = useState(0);
    const isLogin = useSelector(state => state);
    const dispatch = useDispatch();

    const changeBackground = () => {
        if(window.scrollY >=80){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    }
    const checkExapnd = () => {
        if(windowInnerWidth<768){
            if(navExpanded){
                changeBackground();
                setNavExpanded(false);
            }else{
                setNavBar(true);
                setNavExpanded(true);
            }
        }
    }
    const setWidth = () => {
        setWindowInnerWidth(window.innerWidth);
    }

    window.addEventListener('load',setWidth);
    window.addEventListener('scroll',changeBackground);
    const goToLogin = () => {
        history.push({pathname:'/login'});
    }
    const goLogout = () => {
        fire.auth().signOut().then(() => {
            // Sign-out successful.
            Swal.fire(
                'Sign-out...',
                'Successful Sign-out...',
                'success'
              ).then(() => {
                dispatch(setLogout());
                history.push({pathname:'/home'});
              });

          }).catch((error) => {
            // An error happened.
            console.log(error.message);
          });
    }
    const AddClock = () => {
        history.push({pathname:'/AddClockImages'});
    }
    const AddFrame = () => {
        history.push({pathname:'/AddFrameImages'});
    }
     return(
        <div className='header-body'>
            {/* collapseOnSelect */}
            <Navbar fixed='top' expand="md" expanded={navExpanded} onToggle={checkExapnd}  className={navBar ? 'navbar active' : 'navbar'}>
                <Brand  href="#Home">Gajanand Clock</Brand>
                <Toggle  aria-controls="responsive-navbar-nav" />
                <Collapse id="responsive-navbar-nav">
                    <Nav >
                        <Link onSelect={checkExapnd}  href="#Home">Home</Link>
                        <Link onSelect={checkExapnd}  href="#About">About</Link>
                        <Link onSelect={checkExapnd} href="#Service"  >Service</Link>
                        { isLogin 
                        ?
                        <Nav>
                        <Link onSelect={checkExapnd} onClick={AddClock} href="/AddClockImages">Add Product</Link>
                        {/* <Link onSelect={checkExapnd} onClick={AddFrame} href="/AddFrameImages">Add Frame</Link> */}
                        </Nav>
                        :
                         null
                        }

                        <Link onSelect={checkExapnd} href="#ContactUs">Contact Us</Link>
                        { isLogin  ? 
                            <Link onSelect={checkExapnd} onClick={goLogout} href="#">Logout</Link>                    
                        :
                            <Link onSelect={checkExapnd} onClick={goToLogin} href="/login">Login</Link>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;