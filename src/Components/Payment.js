import React, { Component } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      para: "",
    };
  }
  doubt = () => {
    if (
      this.state.value === "ptm" ||
      this.state.value === "gp" ||
      this.state.value === "cod" ||
      this.state.value === "pp"
    ) {
      this.setState({
        para : "/Thanks"
      });
    } else {
      alert("Please Select an Option");
    }
  };
  handle = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <motion.div className="maindiv_" 
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}

      >
        <div className="subdiv_">
          <h2>Payment Methods</h2>
          <br></br>
          <div className="gap"></div>

          <table>
            <tr>
              <td>
                <input
                  type="radio"
                  onChange={this.handle}
                  name="o1"
                  value="cod"
                />
              </td>
              <td>Cash On Delivery</td>
            </tr>

            <tr>
              <td>
                <input
                  type="radio"
                  onChange={this.handle}
                  name="o1"
                  value="pp"
                />
              </td>
              <td>Phone Pe</td>
            </tr>

            <tr>
              <td>
                <input
                  type="radio"
                  onChange={this.handle}
                  name="o1"
                  value="gp"
                />
              </td>
              <td>Google Pay</td>
            </tr>

            <tr>
              <td>
                <input
                  type="radio"
                  onChange={this.handle}
                  name="o1"
                  value="ptm"
                />
              </td>
              <td>Paytm</td>
            </tr>
          </table>

          <div class="btn btn-lg btn-outline-dark">
            <Link to={this.state.para}>
              
              <button
                class="btn btn-primary"
                type="button"
                onClick={this.doubt}
              >
                Continue To Payment
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }
}
