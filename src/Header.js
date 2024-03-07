import React from 'react'
import "./css/header.css"
// import SearchIcon from '@mui/icons-material/Search';
import { VscSearch } from "react-icons/vsc";
import { BiCartAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
const Header = () => {
    const{ myReducer } = useStateValue();
    const [state] = myReducer;
    console.log("first",state)
    return ( 
        <>
            <div className="header">
                 <Link to='/'>
                 <img src="https://amazonyoutube.vercel.app/static/media/logo.1c9be0b254d3ff1dc9e9.png" className="header__logo" />
                 </Link >

                 <div className='in'>
                    <p>.in</p>
                 </div>
               
              
                <div className="header__location">
                    <p className='add-first'>Hello user</p>
                    <div className='add-icon'>
                        <HiOutlineLocationMarker className='location' />
                        <p className='add-second'>Select your address</p>
                    </div>
                </div>
            

            <div className="header__search">
                <input type="text" />
                <VscSearch className="header__searchIcon" />
                {/* <SearchIcon/> */}
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionone">Hello user</span>
                    <Link to="/Login">
                    <span className="header__optiontwo">Sign In</span>
                    </Link>
                </div>

                <div className="header__option">
                    <span className="header__optionone">Return</span>
                    <span className="header__optiontwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionone">Your</span>
                    <span className="header__optiontwo">Prime</span>
                </div>

                <div className="header__optionBasket">
                    <Link to="/ShoppingCart">
                    <BiCartAlt className='basket' />
                 <span>{state.CartList.length}</span> 
                    </Link> 
                </div>


            </div>
        </div >

            <div className="header__bottom">
               <div className="header__menu"><GiHamburgerMenu/></div>
               <p className="header__all">All</p>
                <ul>
                    <li>Amazon miniTV</li>
                    <li>Mobile</li>
                    <li>category</li>
                    <li>computer</li>
                    <li>cloths</li>
                    <li>Electronic</li>
                    <li>Today's Deals</li>
                    <li>Best sellers</li>


                    <li>
                        <img src="https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/GW/AugART23_SWM_SM._CB599312843_.jpg"  />
                    </li>

                </ul>
            </div>

</>
    )
}

export default Header;