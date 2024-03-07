import React from "react";
import Header from "./Header";
// import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
// import Banner from "./Banner";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner1 from "./Banner1";
import ProductList from "./ProductList";
import Login from "./Login";
import firebase from "./firebase"
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";
import Banner2 from "./Banner2";
import Productslider from "./Productslider";
import Footer from "./Footer";
import Footpanel2 from "./Footpanel2";
import Footpannel3 from "./Footpannel3";


function App() {
  return (
    
      <Router>
        
        <Routes>  
          <Route exact path="/" element={
            <React.Fragment>
              <Header />
              <Banner1/>
              <ProductList/>
              {/* <Productslider/> */}
           <Banner2/>
          <Footer/>      
          <Footpanel2/>
           <Footpannel3/>
            </React.Fragment>
          } />
           <Route exact  path="/ShoppingCart" element={
            <React.Fragment>
              <Header />
            <ShoppingCart/> 
            <Footer/>
          <Footpanel2/>
           <Footpannel3/>
              
            </React.Fragment>
          } />
          <Route exact  path="/Login" element={
                <Login/>
          } />
           <Route exact  path="/Checkout" element={
              <React.Fragment>
                 <Header />
                <Checkout/>
                <Footer/>
          <Footpanel2/>
           <Footpannel3/>
              </React.Fragment>
          } />
          <Route exact  path="/Thankyou" element={
              <React.Fragment>
                 <Header />
               <Thankyou/>
               <Footer/>
          <Footpanel2/>
           <Footpannel3/>
              </React.Fragment>
          }/>
        </Routes>
      </Router>
  );
}

export default App;

