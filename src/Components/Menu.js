import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

export default function Menu({ data, addtocart }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="main_div">
        <div className="sub_div">
          <h2 id="Imenu">ITEMS MENU</h2>
          {data.map((element) => {
            return (
              <div>
                <MenuItem data={element} addtocart={addtocart} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
