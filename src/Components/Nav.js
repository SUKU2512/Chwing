import React, { useState } from "react";
import logo from "./Images/logo.jpg";
import cart from "./Images/cart.png";
import { Link } from "react-router-dom";
import back from "./Images/Profile.png";


export default function Nav({ count }) {
    
  const getuserArr = localStorage.getItem("sukanya");
  const userdata = JSON.parse(getuserArr);

  return (
    <div className="fill">
      <nav class="navbar navbar-expand-lg  fill ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Bootstrap" width="60" height="50" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a className="x" href="/" alt="Nothing">Chwing</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
            
              <div id="change">
              {getuserArr && getuserArr.length ?  "Welcome "+userdata[0].name +" !" :<Link to="Signup">
              <img src={back} alt="nothing" width="50" height="40"></img>
            </Link>}
            
              </div>
              <div id="space"></div>
              <div>
                <Link to="Cart" id="cart">
                  <img src={cart} alt="Bootstrap" width="50" height="40" />
                  <sup>{count}</sup>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
