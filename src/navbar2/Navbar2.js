import React from 'react'
import '../navbar2/Navbar2.css'
import '../navbar2/Navbar2media.css'
const Navbar2 = () => {
  return (
    <div className='nav'>
        <div className='hamburgar'><i class='bx bx-menu'>All</i></div>
        <div className='nav-links'>
            <a href='/'>Amazon miniTV</a>
            <a href='/'>Sell</a>
            <a href='/'>Best Seller</a>
            <a href='/'>Today's Deals</a>
            <a href='/'>Mobiles</a>
        </div>
        <div className='amaozon-ad'>
           <img src='/image/app-logo.jpg' alt='applogo'/>Shopping made easy | Download the app
        </div>
        <div className='location-nav2'>
        <i class='bx bx-location-plus' style={{color:'white'}} >Update location</i>
        </div>
    </div>
  )
}

export default Navbar2