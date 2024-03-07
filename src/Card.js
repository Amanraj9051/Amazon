import React from 'react'
// import "./css/card.css"

import Rating from './Rating';
import { useStateValue } from './StateProvider';

const Card = (props) => {
  const { title, price, rating, imageURL } = props;
  
const { myReducer } = useStateValue();
const[state,dispatch]=myReducer;
    

const clickHanler = (selectedValue) => {
  const timeStame = new Date().getTime();
  selectedValue= {...selectedValue, id:timeStame};
  
    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue
   })
   
  }
   
  return(

    <div className="card">
      <p className='title' >{title}</p>
      <p className='price'>Rs:{price}</p> 
      <p className='starRating'>Rating<Rating rating={rating}/> </p>
      <div className='imageHolder'>
        <img src={imageURL} />
        <br/>
        <br/>
        <button onClick={()=>clickHanler(props)}>Add to cart</button>
      </div>
    </div>




  )
}

export default Card; 