import React from 'react'
import ReactWhatsapp from "react-whatsapp";
import "../assets/styles/components/BurgerMenu.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Whatsapp = () => {
  return (
    <div className="App">
    <ReactWhatsapp number="" message="Salam Optimal!!!" />
    <FloatingWhatsApp phoneNumber="+994512061313" />
  </div>
  )
}

export default Whatsapp