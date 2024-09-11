import React, { Children, createContext, useEffect, useState } from 'react'




//! 1- creating context
export const KullaniciContext=createContext()
//! 2- Provider
const KullaniciProvider = ({children}) => {

const [users,setUsers]=useState([])


useEffect(()=>{
  fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>  )
},[])





  return (
    <KullaniciContext.Provider value={{}}>
{children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider