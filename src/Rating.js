import React from 'react'
import { FaStar } from 'react-icons/fa';
const Rating = ({rating}) => {
  return (
    Array(5).fill().map((item, i)=> <Start key={i} selected={rating > i}/> )
  )
}
const Start = ({selected}) => <FaStar color={selected ? 'Red' : 'gray'}/>

export default Rating