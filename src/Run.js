import React from 'react'
import App from './App'
import Sorry from './Components/Sorry'
import { motion } from 'framer-motion'

export default function Run({time}) {
  return (
    <motion.div
    initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth}}>
      {
        time > 7 && time < 23 ?   <App/> : <Sorry/>
      }
    </motion.div>
  )
}
