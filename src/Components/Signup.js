import React, { useState } from "react";
import logo from "./Images/Background.png";
import { Link, useNavigate} from "react-router-dom";
import validator from "validator";
import "./log.css";


export default function Signup() {

  const [hidename, setHidename] = useState(false);
  const [hidemail, setHidemail] = useState(false);
  const [hidedob, setHidedob] = useState(false);
  const [hidepass, setHidepass] = useState(false);
  const [emerror, setEmerror] = useState(false);
  const [passerror, setpasserror] = useState(false);
  const [error, setError] = useState(false);
  const [cred, setCred] = useState(false);
  const [push,setPush]=useState([]);
  const history=useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    dob: "",
    password1: "",
    password2: "",
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



  const addData = (e) => {
    let c = 0;
    // e.preventDefault();
    const { name, email, dob, password1, password2 } = inpval;
    if (name === "") {
      setHidename(true);
    } else {
      c++;
      setHidename(false);
    }

    if (email === "") {
      setHidemail(true);
      setEmerror(false);
    } else {
      if (validator.isEmail(email)) {
        setHidemail(false);
        c++;
      } 
      else{
        setEmerror(true);
      }
    }

    if (dob === "") {
      setHidedob(true);
    } else {
      c++;
      setHidedob(false);
    }

    if (password1 === "" && password2 === "") {
      setHidepass(true);
    } else {
      if (password1 === password2 && validator.isStrongPassword(password1)) {
        setpasserror(false);
        setError(false)
        setHidepass(false)
        c++;
      } else {
        setHidepass(false)
        setpasserror(true);
        setError(true);
      }
    }


    if (c === 4) {
      setCred(true);
      localStorage.setItem("sukanya",JSON.stringify([...push,inpval]));
      history("/Login")
    } else {
      setCred(false);
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
            type="text"
            name="name"
            class="form-control"
            placeholder="Enter Your Name"
            onChange={getdata}
          />
        </div>
        {hidename ? <p id="error">Name Field Is Required</p> : " "}
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
            type="date"
            name="dob"
            class="form-control"
            placeholder="dd-mm-yyyy"
            onChange={getdata}
          />
        </div>
        {hidedob ? <p id="error">Date Of Birth Field Is Required</p> : " "}
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
        <div class="mb-3 col-lg-9">
          <input
            type="password"
            name="password2"
            class="form-control"
            id="inputPassword"
            placeholder="Confirm Password"
            onChange={getdata}
          />
        </div>
        {hidepass ? <p id="error">Password Field Is Required</p> : " "}
        {passerror ? <p id="error">Password Doesnot Match</p> : " "}
        {error ? (
          <p id="error">
            <p>Password Must Be Strong</p>
            <ul><li>Password Should Include Capital and Small Letters</li>
            <li>Password Must Include @</li>
            <li>Password Must be Greater than 6</li></ul>
          </p>
        ) : (
          " "
        )}
        <div className="mb-3 col-lg-9">
            <button
              onClick={() => addData()}
              type="submit"
              className="mb-3 col-lg-12 "
              id="btn"
            >
              SIGN-UP
            </button>
          {cred ? <p id="put">SuccessFully Signed In</p> : " "}
        </div>
        <div
          className="d-flex"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <div>
            <h6>Already Have An Account ? </h6>{" "}
          </div>
          <div>
            <Link to="/Login" className="red">
              Log-In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
