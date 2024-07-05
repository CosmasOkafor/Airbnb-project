// import React from 'react'
// import Navbar from './Navbar'
import logo from '../assets/airbnb logo.png'
import profile from '../assets/Frame.png'
import { Search, Globe, Menu } from 'lucide-react'




function Header() {
  return (
    <div className='container px-4 mx-auto'>
      <div className='flex justify-between'>
      <img src={logo} alt="" />

      <div className='flex gap-5 divide-x-2 border-2 rounded-full'>
        <p>Anywhere</p>
        <p>Any week</p>
        <p>Guest</p>
        <Search />
      </div>

      <div className='flex gap-3 items-center'>
        <div className='flex gap-3'>
        <p>Airbnb your home</p>
        <Globe />
        </div>
        <div className='flex border-2 rounded-full'>
          <Menu />
          <img src={profile} alt="" />
        </div>
      </div>
     
        
    </div>
    </div>
  )
}

export default Header