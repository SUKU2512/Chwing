import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import './style.css'
import { motion } from 'framer-motion'

export default function Cards({data} ) {
  
  return (
    <motion.div className="round">
    
    {
      data.map((element) => {
      return (
        <div className="round">
        <label><Card style={{ width: "22rem", border:"none"}} >
        <Card.Img variant="top" className="cd" src={element.imgdata}></Card.Img>
        <div className="card_body">
          <div className="upper_data d-flex justify-content-between align-items-center">
            <h4 className="mt-2" key={element.id}>{element.rname}</h4>
            <span className="rate">{element.rating}</span>
          </div>
          <div className="lower_data d-flex justify-content-between align-items-center">
            <h6>{element.address}</h6>
          </div>
        </div>
        <Link to={"/"+element.rname+"/Items"}><button  id="book" class="btn btn-outline-dark col-lg-1" >Order Now</button></Link>
      </Card> 
      
      </label>
        </div>
      );
    })}
    </motion.div>
  );
}
