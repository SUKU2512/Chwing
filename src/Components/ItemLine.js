import React from "react";
import Spinner from "./Spinner";

export default function ItemLine(x, y) {
  return (
    <div>
      <div className="two">
        <h3 className="mmain" key={x.id}>
          {x.rname}
        </h3>
        <p id="mprice">{x.price}</p>
        <div>
          <Spinner />
        </div>
        <button
          id="morder"
          class="btn btn-outline-dark col-lg-1"
          onClick={() => y(x)}
        >
          Add To Cart
        </button>
      </div>
      <p className="mside">{x.address}</p>
    </div>
  );
}
