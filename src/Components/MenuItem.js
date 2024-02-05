import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MenuItem({ data, addtocart }) {
  
  const [num, setNum] = useState(1);
  const add = () => {
    num < 10 ? setNum(num + 1) : alert("More Than 10 orders are not permitted");
  };
  const sub = () => {
    num > 1 ? setNum(num - 1) : setNum(num);
  };
  return (
    <motion.div className="container"
    initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}
    >
      <div className="row" id="align">
        <div className="col" id="rname">
          <h4>{data.rname}</h4>
          <div className="row" id="fix">
          {data.address}
            </div>
        </div>

        <div className="col">
          <h6>{data.price}</h6>
        </div>
        <div className="col">
          <h6>
            <button id="plus" onClick={() => sub()}>-</button>
            {num}
            <button id="plus" onClick={() => add()}>+</button>
          </h6>
        </div>
        <div className="col">
          <button
            id="morder"
            class="btn btn-outline-dark col-lg-1"
            onClick={() => addtocart(data,num)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <br></br>
    </motion.div>
  );
}
