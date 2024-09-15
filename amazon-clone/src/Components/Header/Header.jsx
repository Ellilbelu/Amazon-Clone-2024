import React from 'react'
import classes from "./header.module.css"
import amazonlogo from "../../assets/images/amazon_logo.png"
import flag from "../../assets/images/flags_USA.png"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from '../Header/LowerHeader';

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo */}
          <div className={classes.logo__container}>
            <a href="/">
              <img src={amazonlogo} alt="amazon logo" />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin size={20}/>
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search Amazon" />
            <BsSearch size={25} />
          </div>

          {/* right side link */}

          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img src={flag} alt="America flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Hello, sign in</p>
              <span>Account & Lists</span>
            </a>
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart size={35}/>
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header