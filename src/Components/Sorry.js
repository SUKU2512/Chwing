import React from "react";
import { motion } from "framer-motion";

export default function Sorry() {
  return (
    <motion.div
    initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}>
        <h1 className="middle">Resturants Are Closed</h1>
      </motion.div>
  );
}


