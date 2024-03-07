import React from 'react'
import Carousel from 'react-multi-carousel'

import { styled } from '@mui/material'

import { bannerData1 } from './Data';

const Image = styled('img')({
    width: '80%',
    height: '250px',
    padding: '15px',
    margin:'14px 0px 0px 0px',
    backgroundColor: ''
})

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Banner2 = () => {
  return (
    <Carousel
    responsive={responsive}
    swipeable={true}
    draggable={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={2500}
    keyBoardControl={true}
           slidesToSlide={1}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    containerClass="carousel-container"
    >

        {
            bannerData1.map(data => (
                <>
                
                <Image src={data.url} alt="banner1"  />
                <h5 style={{fontSize:'25px'}}>{data.tittle}</h5>
                
               <h5 style={{fontWeight:'500'}}>Rs:{data.price}</h5> 
               
                <h5 style={{color:"red",fontSize:'20px'}}>Discount:{data.Discount}</h5>
                </>
            ))
        }

        </Carousel>
    )
}

export default Banner2