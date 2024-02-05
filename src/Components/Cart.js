import React from "react";
import {  useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function Cart({ cart }) {
  let tp = 0;
  const history = useNavigate();
  const pass = (x) => {
    if (x === 0) {
      alert("We cannot move to next step");
    } else {
      history("/Payment");
    }
  };
  return (
    <div className="maindiv">
      <div className="subdiv">
        <h2 id="Imenu">ORDER SUMMARY</h2>
        <div class="container text-center">
          <div className="row">
            <div className="col">
              <h5>ITEM</h5>
            </div>
            <div className="col">
              <h5>PRICE</h5>
            </div>
            <div className="col">
              <h5>QUANTITY</h5>
            </div>
            <div className="col">
              <h5>INC/DEC</h5>
            </div>
          </div>

          {cart.map((cart) => {
            return (
              <div className="container">
                <div class="row">
                  <Spinner name={cart.name} num={cart.qtn} price={cart.price} />
                  {console.log((tp = tp + cart.price * cart.qtn))}
                </div>
              </div>
            );
          })}
          <div></div>
          <div class="row final">
            <div class="col">TOTAL AMOUNT</div>
            <div class="col">{tp}</div>
          </div>
          <button onClick={() => pass(tp)}>Continue Payment</button>
        </div>
      </div>
    </div>
  );
}
