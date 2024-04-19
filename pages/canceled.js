import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillFrown} from 'react-icons/ai';

import { useStateContext } from '../context/StateContext';


const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
   
  }, []);

  return (
    <div className="failed-wrapper">
      <div className="failed">
        <p className="icon_red">
          <AiFillFrown />
        </p>
        <h2>Failed Payment !</h2>
        <p className="email-msg">Please try again later...</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:Laythkuz.007@gmail.com">
          Laythkuz.007@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn1">
           Return to store
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled