import React from 'react'
import "./Counter.css"
import {useDispatch, useSelector } from 'react-redux'
import { arttir } from '../../redux/actions/counterActions'





const Counter = () => {
const {sayac,text}= useSelector((state)=>state.counterReducer )


const dispatchhh =useDispatch()




  return (
    <div className='app'>
      <h2 className='counter-header'>Counter With Redux</h2>

      <h1>{sayac}</h1>

      <h2>{text}</h2>


      <div>
        <button className='counter-button positive' onClick={()=>dispatchhh(arttir())}>ARTTIR</button>
        <button className='counter-button'>REST</button>
        <button className='counter-button negative'>AZALT</button>
      </div>
    </div>
  )
}

export default Counter