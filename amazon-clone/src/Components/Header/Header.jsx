
import React, { useContext } from 'react'
import classes from "./header.module.css"
import amazonlogo from "../../assets/images/amazon_logo.png"
import flag from "../../assets/images/flags_USA.png"
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from '../Header/LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../Data Provider/DataProvider';

function Header() {

const [{basket},dispatch] = useContext(DataContext);
const totalItem = basket?.reduce((amount,item)=>{
  return item.amount + amount;
}, 0);


  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header__container}>
            {/* logo */}
            <div className={classes.logo__container}>
              <Link to="/">
                <img src={amazonlogo} alt="amazon logo" />
              </Link>
              {/* delivery */}
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin size={20} />
                </span>
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* search */}
            <div className={classes.search}>
              <select name="" id="name_all">
                <option value="">All</option>
              </select>
              <input
                type="text"
                name=""
                id="name_sear"
                placeholder="search Amazon"
              />
              <BsSearch size={25} />
            </div>

            {/* right side link */}

            <div className={classes.order__container}>
              <a href="" className={classes.language}>
                <img src={flag} alt="America flag" />
                <select name="" id="name_lan">
                  <option value="">EN</option>
                </select>
              </a>
              <Link to="/auth">
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </Link>
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header