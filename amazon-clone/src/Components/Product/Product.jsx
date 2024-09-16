

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from "./product.module.css";

function Product() {

const [products, setproducts] = useState()

useEffect(() =>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setproducts(res.data)
    }).catch((error)=>{
        console.log(error)
    })
}, [])



  return (
    <section className={classes.products_container}>
      {
      products?.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id}/>
      ))
      }
    </section>
  );
}

export default Product