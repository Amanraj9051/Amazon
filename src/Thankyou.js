import React from 'react'
import "./css/checkout.css"
import { Link } from "react-router-dom";
const Thankyou = () => {
  return (
    <div className="order__confirm">
        <h1>Hello user</h1>
        <h2>Thank you for your order!</h2>
         <h3>Your Order Number is : 10189766</h3>
         <h4>Order Total : $240</h4>
         <Link to='/'>
         <button>Continue Shopping</button> 
         </Link>
        
    </div>     
  )
}

export default Thankyou