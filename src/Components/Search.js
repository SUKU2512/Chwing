import React, { useEffect, useState } from "react";
import "./style.css";
import Resturant from "./Resturant";
import Cards from "./Cards";
import Form from "react-bootstrap/Form";
import { motion } from "framer-motion";

export default function Search() {
  const [fdata] = useState(Resturant);
  const [copydata, setCopyData] = useState([]);

  const changeData = (e) => {
    let getchangedata = e.toLowerCase();
    if (getchangedata === "") {
      setCopyData(fdata);
    } else {
      let storedata = copydata.filter((element) => {
        return element.rname.toLowerCase().match(getchangedata);
      });
      setCopyData(storedata);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCopyData(Resturant);
    }, 50);
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search Restaurant"
            onChange={(e) => changeData(e.target.value)}
          />
        </Form.Group>
        <button type="submit" class="btn btn-outline-dark col-lg-1">
          SEARCH
        </button>
      </Form>

      <br></br>

      <section className="item_section mt-4 container align-items-left">
        <h2>Resturants are open Now</h2><br></br>
        <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <img
              src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"
              class="d-block w-100"
              id="size"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              src="https://foodhub.scene7.com/is/image/woolworthsltdprod/2004-easy-pepperoni-pizza:Desktop-1300x658"
              id="size"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg"
              class="d-block w-100"
              id="size"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

        <div>
          {copydata && copydata.length ? (
            <Cards data={copydata} />
          ) : (
            "No Results Found"
          )}
        </div>
      </section>
    </motion.div>
  );
}
