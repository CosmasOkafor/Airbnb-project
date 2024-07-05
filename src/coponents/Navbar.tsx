//import React from 'react'
//import { Link } from 'react-router-dom'
import amazingViews from "../assets/Icon.png"
import cabins from "../assets/Frame 29.png"
import skiing from "../assets/Frame 29 (1).png"
import beachFront from "../assets/Frame 29 (2).png"
import grandPianos from "../assets/Frame 29 (3).png"
import mansions from "../assets/Frame 29 (4).png"
import omg from "../assets/Frame 29 (5).png"
import amazingPools from "../assets/Frame 29 (6).png"



function Navbar() {
  return (
    <div className=' flex sm:grid-cols-4 grid-rows-5 gap-3 py-5 px-5' >
        <img src={amazingViews} alt="" />
        <img src={cabins} alt="" />
        <img src={skiing} alt="" />
        <img src={beachFront} alt="" />
        
        <img src={grandPianos} alt="" />
        <img src={mansions} alt="" />
        <img src={omg} alt="" />
        <img src={amazingPools} alt="" />
        
    </div>
  )
}

export default Navbar