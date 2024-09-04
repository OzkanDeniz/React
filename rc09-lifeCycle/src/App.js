import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import LifeCycleMethods from './LifeCycleMethods';
import Clock from './Clock';

const App = () => {

const[goster,setGoster] =useState(true)

  return (
    <div className='text-center mt-4 container '>
      
      <button onClick={()=>setGoster(!goster)} className='btn btn-danger'>Show</button>
    
     {/* {goster ===true &&  <LifeCycleMethods/>} */}
{goster === true && <Clock/>}

    </div>
  )
}

export default App