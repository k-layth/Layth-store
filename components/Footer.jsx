import React from 'react';
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
     <p>&copy; Developed By Layth Alkumaim </p>
      <p className="icons">
        <a href='https://www.instagram.com/k_layth?igsh=MzNlNGNkZWQ4Mg=='><AiFillInstagram /></a>
        <a href='https://www.facebook.com/layth.alkumaim.1?mibextid=ZbWKwL'><AiFillFacebook    /></a>
      </p>
    </div>
  )
}

export default Footer