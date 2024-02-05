import React, { useState } from "react";
import logo from "./Images/Background.png";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import "./log.css";

export default function Signup() {
  const [hidemail, setHidemail] = useState(false);
  const [hidepass, setHidepass] = useState(false);
  const [emerror, setEmerror] = useState(false);
  const [error,setError]=useState(false)
  const [push,setPush]=useState("")
  const [data, setData] = useState([]);
  const history=useNavigate()


  const [inpval, setInpval] = useState({
    email: "",
    password1: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  console.log(inpval);

  const addData = (e) => {
    

    let c=0;

    const getuserArr = localStorage.getItem("sukanya");

    const { email, password1 } = inpval;

    if (email === "") {
      setHidemail(true);
    } else if (validator.isEmail(email)) {
      setHidemail(false);
      setEmerror(false);
      c++;
    } else {
      setHidemail(false);
      setEmerror(true);
    }

    if (password1 === "") {
      setHidepass(true);
    } else {
      setHidepass(false);
      c++;
    }
    console.log("c value is" + c);
    if (c === 2) {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const login=userdata.filter((e,k)=>{
          return e.email === email && e.password1 === password1
        });
        if(login.length === 0)
        {
          setError(true);
        }
        else{
          history("/")
        }
      }
    }
  };

  return (
    <div>
      <div class="bg-image">
        <img src={logo} alt="nothing"></img>
      </div>
      <div class="bg-text">
        <div class="mb-3 col-lg-9">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Enter Email"
            onChange={getdata}
          />
        </div>
        {hidemail ? <p id="error">Mail Field Is Required</p> : " "}
        {emerror ? <p id="error">Please Enter Valid Email-ID</p> : " "}

        <div class="mb-3 col-lg-9">
          <input
            type="password"
            name="password1"
            class="form-control"
            placeholder="Enter Password"
            id="inputPassword"
            onChange={getdata}
          />
        </div>

        {hidepass ? <p id="error">Password Field Is Required</p> : " "}
        {error ? <p id="error">Invalid Details</p> : " "}
        <div className="mb-3 col-lg-9">
            <button
              onClick={() => addData()}
              type="submit"
              className="mb-3 col-lg-12 "
              id="btn"
            >
              LOG-IN
            </button>
        </div>
      </div>
    </div>
  );
}
