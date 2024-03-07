import React from 'react'
import { Input } from '@mui/material'
import "./css/checkout.css"
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className='checkout_wrap'>
        <h2>Shipping Details</h2>
        <br/>
        <form>
            <div className='checkout__form'>
            <div className='checkout_column'>
                <label>First Name*</label>
                <Input required name="firstname" />
                {/* <input type="firstname" /> */}
            </div>
            <div className='checkout_column'>
                <label>Last Name*</label>
                <Input type="lastname" />
            </div>
            <div className='checkout_column'>
                <label>Addresh*</label>
                <Input type="address" />
            </div>
            <div className='checkout_column'>
                <label>Email*</label>
                <Input type="email" />
            </div>
            <div className='checkout_column'>
                <label> City*</label>
                <Input type="city" />
            </div>
            <div className='checkout_column'>
                <label>Zipcode</label>
                <Input type="Zipcode" />
            </div>
            <div className='checkout_column'>
                <label>Shipping Country*</label>
                <select name="country">
                    <option value="" key="">India</option>
                    <option value="" key="">Nepal</option>
                    <option value="" key="">Shingapore</option>
                    <option value="" key="">China</option>
                </select>
            </div>

            <div className='checkout_column'>
                <label>Shipping State*</label>
                <select name="subdivision">
                    <option value="" key="">Delhi</option>
                    <option value="" key="">Punjab</option>
                    <option value="" key="">Haryana</option>
                    <option value="" key="">Bihar</option>
                    <option value="" key="">Rajasthan</option>
                    <option value="" key="">Himachal</option>
                    <option value="" key="">UttraKhand</option>
                </select>
            </div>

            <div className='checkout_column'>
                <label>Shipping Subdivision*</label>
                <select name="subdivision">
                    <option value="" key="">Gaya</option>
                    <option value="" key="">Aurangabadh</option>
                    <option value="" key="">Jhenabhad</option>
                    <option value="" key="">Patna</option>
                </select>
            </div>

            <div className='checkout_column'>
                <label>&nbsp;</label>
                <Link to= '/Thankyou'>
                <button>Pay Now</button>
                    </Link>
               
            </div>

            </div>
        </form>
    </div>
  )
}

export default Checkout