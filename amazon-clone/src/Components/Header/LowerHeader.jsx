import React from 'react'
import classes from "./header.module.css"
import { AiOutlineMenu } from "react-icons/ai";
function LowerHeader() {
  return (
    <div className=
    {classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sells</li>
      </ul>
      <div className={classes.leftAdv}>
        <p>Shop the Gaming Store</p>
      </div>
    </div>
  );
}

export default LowerHeader