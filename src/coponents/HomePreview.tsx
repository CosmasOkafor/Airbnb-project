// import React from 'react'
import house from "../assets/Frame 6.png"
import pool from "../assets/Frame 6 (1).png"
import gallery from "../assets/Frame 6 (3).png"
import bay from "../assets/Frame 6 (2).png"
import seatout from "../assets/Frame 6 (4).png"
import parlour from "../assets/Frame 6 (5).png"
import umbrella from "../assets/Frame 6 (7).png"
import livingRoom from "../assets/Frame 6 (9).png"
import garden from "../assets/Frame 6 (10).png"
import balcony from "../assets/Frame 6 (11).png"
import beauty from "../assets/Frame 6 (12).png"
import swimmingPool from "../assets/Frame 6 (13).png"
import lounge from "../assets/Frame 6 (14).png"
import corridoor from "../assets/Frame 6 (15).png"
import relaxation from "../assets/Frame 6 (16).png"
import art from "../assets/Frame 6 (16).png"


function HomePreview() {
  let houses = [
    {photo: house, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: pool, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: gallery, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: bay, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$2000 total"},
    {photo: seatout, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: parlour, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: umbrella, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: livingRoom, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: garden, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: balcony, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: beauty, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: art, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: swimmingPool, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: lounge, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: corridoor, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: relaxation, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: balcony, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
    {photo: balcony, location: "Halt moon bay", views: "Beach and ocean views", date: "22-27 oct", price: "$1630 total"},
  ];

  return (
    <div>
      <div className='grid grid-cols-4 my-20 ml-20 mr-20 gap-2'>
        {houses.map((home)=> (
          <div>
            <img src={home.photo} alt="" />
            <p>{home.location}</p>
            <p>{home.views}</p>
            <p>{home.date}</p>
            <p>
              
              {home.price
        }
            </p>
          </div>

        ))

        }
      </div>

    </div>
  )
}

export default HomePreview