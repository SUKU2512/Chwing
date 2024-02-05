import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import './back.css'
// import './style.css'

export default function Thanks() {
    const [per,setPer]=useState(20);
    const [head,setHead]=useState("Please Wait For SomeTime")
    const [name,setName]=useState("Preparing Food")
        setTimeout(() => {
          setPer(per+10);
          if (per > 250){
            setName("Delivering Food");
          }
          if(per < 250){
            setName("Preparing Food");
          }
          if(per > 490){
            setName("Succefully Delivered");
          }
           if(per >500){
            setPer(500);
            setHead("Thanks For Ordering");
           }
        }, 3000);
      
  return (
    <motion.div
    id="back"
    initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}>
      <h1>Order Placed Succefully</h1>
      <h2>{head}</h2>
      <div
        class="progress"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated" style={{width:per}}
        >{name}</div>
      </div>
    </motion.div>
  );
}
