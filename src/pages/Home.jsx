import React from 'react'
import Pagecontainer from '../components/Pagecontainer/Pageontainer'
 import '../assets/styles/pages/home.scss';
import Slidercomp from '../components/Slidercomp';
import Sliderbrends from '../components/Sliderbrends';
import Tab from "../components/Tab.jsx"
const Home = () => {
  return (
    <>
 
    <Slidercomp/>
    <Sliderbrends/>
    <Tab/>
    </>
  )
}

export default Home