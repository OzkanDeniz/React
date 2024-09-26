import { OutlinedInput } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRouter = () => {

  const{email,password}=useSelector((state)=>state.yetkiSlice)

  return email==="osman" && password==="1453" ?  (<OutlinedInput/>) : (<Navigate to ="/Login"/>)
 

}

export default PrivateRouter