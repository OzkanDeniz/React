import React, { useEffect, useLayoutEffect, useState } from "react";
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"
import {useDispatch} from "react-redux"
import axios from "axios"

const Home = () => {

const dispatch = useDispatch()


const getApi = async()=>{
    const {data} = await axios("https://fakestoreapi.com/products")
    dispatch(data)
}







  return (
    <Section>
      <Category />
      <ProductCard />
    </Section>
  );
};

export default Home;
