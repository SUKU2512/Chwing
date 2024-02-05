import React from 'react'
import Payment from "./Payment";
import Thanks from "./Thanks";
import Cart from "./Cart";
import Menu from "./Menu";
import Search from "./Search";
import {  Route , Routes, useLocation } from "react-router-dom";
import KFC from "./KFC";
import { useState } from "react";
import Burger_King from "./Burger_King";
import {AnimatePresence} from 'framer-motion'
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';

 function Animate() {
    const location=useLocation();
    const [kdata] = useState(KFC);
    const [bdata] = useState(Burger_King);
    const [cart, setCart] = useState([]);
    const [count,setCount]=useState(0);
    console.log("Animate"+count)

    const addtocart = (data, num) => {
      const getuserArr = localStorage.getItem("sukanya");
      if(getuserArr && getuserArr.length){
        setCount(count+num)
        alert("Product is Added to Cart");
      }
      else{
        alert("Please Login"); 
      }
      const odata = {
        name: data.rname,
        price: data.price,
        qtn: num,
      };
      setCart([...cart, { ...odata }]);
    };
  return (
    <AnimatePresence><Nav count={count}/>
    <Routes location={location} key={location.pathname}>
    <Route exact path="/" element={<Search />} />
    <Route
      path="/KFC/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />

    <Route
      path="/Burger_King/Items"
      element={<Menu data={bdata} addtocart={addtocart} />}
    />
    <Route
      path="/Baskin_Robbins/Items"
      element={<Menu data={bdata} addtocart={addtocart} />}
    />
    <Route
      path="/Chuyax/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />
    <Route
      path="/The_Grill/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />
    <Route
      path="/McDonald's/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />
    <Route
      path="/Domino's/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />
    <Route
      path="/StarBuks/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />
    <Route
      path="/Cafe_Armando/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />
    <Route
      path="/Godavari_Vantakam/Items"
      element={<Menu data={kdata} addtocart={addtocart} />}
    />

    <Route path="/Payment" element={<Payment/>} />
    <Route path="/Cart" element={<Cart cart={cart} />} />
    <Route path="/Thanks" element={<Thanks />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login/>} />
    </Routes></AnimatePresence>
  )
}
export default Animate