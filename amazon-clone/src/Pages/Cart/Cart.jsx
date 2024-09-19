

import React from 'react'

import classes from "./cart.module.css"
import LayOut from '../../Components/Layout/LayOut'
import ProductCard from '../../Components/Product/ProductCard';
import { DataContext } from '../../Components/Data Provider/DataProvider';
import { useContext } from 'react';
import CurrencyFormat from '../../Components/Currency Format/CurrencyFormat';
import { Link } from 'react-router-dom';


function Cart() {

  const [{basket,user}, dispatch] = useContext(DataContext)
  const total = basket.reduce((amount,item)=>{
    return item.price + amount
  }, 0)

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
              <h3>Your Shoping basket</h3>
              <hr />
              {
                basket?.length==0?(<p>Sorry! No item in your cart</p>):(basket?.map((item,i)=>{
                  return <ProductCard key={i} product ={item} renderDesc={true} flex ={true} renderAdd={false}/>
                })
              )
              }
        </div>
        {basket?.length!==0&&(
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount = {total}/>
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to = '/payments'>Continue to checkout</Link>
          </div>
        )}
          
        
      </section>
    </LayOut>
  );
}

export default Cart