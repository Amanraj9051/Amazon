import React from 'react'
import "./css/Cart.css"
import { useStateValue } from './StateProvider';
import { useLinkClickHandler } from 'react-router-dom';
import { Link } from "react-router-dom";
function ShoppingCart() {
  const { myReducer } = useStateValue();
  const[state, dispatch]=myReducer;


  const clickHandler = (id) => {
   dispatch({
    type:'REMOVE_FROM_CART',
    payload:id
   })

  }

  const getTotalAmount = () => {
    let total =0;
    state.CartList.map(item =>{
      return total = Number(total) + Number(item.price);
    })
    return total;
  }
  
  return (
    <div className="checkout">

      <div className="checkout__left">

        <img src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg " className="checkout__ad" />
        <div>
          <h3>Hello Aman</h3>
          <h2 className="checkout__title">your shopping Basket</h2>
        {
            state.CartList.map((item, index) => (<div className="checkoutProduct" key={index}>
            <img src={item.imageURL} className="checkoutProduct__img" />

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <p className="checkoutProduct__price">
                <strong>
                  Rs:{item.price}
                </strong>
              </p>
              <div>{item.rating}</div>
              <button onClick={()=>clickHandler(item.id)}>Remove from Basket</button>
            </div>
          </div>))
        }
          

        </div>
      </div>
      {/* ------------------------------------------checkoutsection---------------------------- */}
      <div className="checkout__right">
        <div className="subtotal">
          <p>
            subtotal ({state.CartList.length} item): <strong>Rs:{getTotalAmount()}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </div>
        <Link to= '/Checkout'>
        <button>Proceed to checkout</button>
        </Link>
        
      </div>


    </div>
  )
}

export default ShoppingCart