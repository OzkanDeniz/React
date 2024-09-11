import React, { createContext } from 'react'
import Home from "./components/Home";
import data from "./data"
import { useState } from 'react';

//! context alanı açıyoruz
export const StudentContext=createContext()



const App = () => {
const[students,setStudents]= useState(data)

const changeColor = (id,newRenk) =>{
setStudents(students.map((a)=>a.id===id ? {...a, color: newRenk} : a))

}


  return (
    //!  2 bütün projeye gönderilmek üzere ilk Home sayfasını (gönderilecek verilerle) sarmalladım
    <div>


      <StudentContext.Provider value={{students,changeColor}}>
      <Home/>
      </StudentContext.Provider>
      

    </div>
  )
}

export default App