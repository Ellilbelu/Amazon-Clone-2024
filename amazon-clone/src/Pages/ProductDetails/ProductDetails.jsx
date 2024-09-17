

import React, { useEffect, useState } from 'react'

import classes from "./productDetails.module.css"
import LayOut from '../../Components/Layout/LayOut'
import axios from 'axios'
import { productUrl } from '../../API/endpoints'
import ProductCard from '../../Components/Product/ProductCard'
import { useParams } from 'react-router-dom'


function ProductDetails() {

  const {productId} = useParams()
  const[product, setProduct] = useState({})

  useEffect(()=> {
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      console.log(res)
      setProduct(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])

  return (

    <LayOut>
      
      <ProductCard product={product}/>
  
    </LayOut>
    
  );
}

export default ProductDetails