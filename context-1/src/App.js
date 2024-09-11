import React, { createContext } from 'react'
import Home from "./components/Home";
import data from "./data"
import { useState } from 'react';

//! context alanı açıyoruz
export const StudentContext=createContext()



const App = () => {
const[students,setStudents]= useState(data)




  return (
    <div>


      
      <Home/>

    </div>
  )
}

export default App