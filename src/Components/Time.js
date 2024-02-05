import React from 'react';
import Run from '../Run';
import { motion } from 'framer-motion';
import Cards from './Cards';

class Time extends React.Component {
 
 
  state = {
    curTime: ""
  };
 
  componentDidMount() {
    this.getTime();
  }
 
  getTime = () => {
    var today = new Date(),
 
    curTime = today.getHours() ;
 
 
    this.setState({ curTime });
  };
 
  render(){
    return (
      <motion.div className="App"
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}>
      
      <Run time={this.state.curTime}></Run>
      </motion.div>
    );
  }
}
 
export default Time;