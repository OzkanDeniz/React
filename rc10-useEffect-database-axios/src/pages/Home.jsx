import React, { useState } from 'react'
import AddBilgi from '../components/AddBilgi'
import BilgiList from '../components/BilgiList'

const Home = () => {
const [tutorial,setTutorial]=useState([])

const getBilgiler=async.get(url)

setTutorial(res.data)

const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";


  return (
    <div>
      <AddBilgi/>
      <BilgiList/>    
       </div>
  )
}

export default Home