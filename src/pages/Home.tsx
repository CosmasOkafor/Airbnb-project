import React from 'react'
import Navbar from '../coponents/Navbar'
import Header from '../coponents/Header'
import HomePreview from '../coponents/HomePreview'

function Home() {
  return (
    <div>
      <Header />
       <div className='pt-3 flex justify-around'><Navbar/></div>
       <HomePreview />

    </div>
  )
}

export default Home