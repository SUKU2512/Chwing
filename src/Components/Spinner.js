import React, { createContext, useState } from 'react';
import './style.css';

export const UserContext=createContext();
export default function Spinner({name,num,price}) {
  
  const [x,setX]=useState(num)  
  console.log("updated x"+x)
  const add = (x) =>
    {
      console.log("HAPPY")
        x < 10 ? setX(x+1) : alert("More Than 10 orders are not permitted") 
    }
    const sub = () =>{
      console.log("SAD")
        x > 0 ? setX(x-1) : setX(x)
    }
  return (
    <div className='row'>
    <div className='col'>{name}</div>
    <div className='col'>{price}</div>
    <div className='col'>{x}</div>
    <div className='col'>
      <button onClick={()=> sub(x)}>-</button>{x}<button onClick={()=>add(x)}>+</button>
    </div>
    <div>
      
    </div>
    </div>
  )
}
