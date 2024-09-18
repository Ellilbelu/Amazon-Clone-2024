import React, { useEffect, useState } from "react";

import classes from "./productDetails.module.css";
import LayOut from "../../Components/Layout/LayOut";
import axios from "axios";
import { productUrl } from "../../API/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const[isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading? (<Loader /> ):(<ProductCard product={product}/>)}
    </LayOut>
  );
}

export default ProductDetails;
