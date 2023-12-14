import React from 'react'
import '../navbar/Navbar.css'
import '../navbar/Navmedia.css'
const Navbar = () => {
    
  return (
    <>
    <nav>
        <div className='logo'>
             <div className='hamburgur' ><i class='bx bx-menu'></i></div>
            <img src='/image/Amazon-Logo-Black1.jpg' alt='logo'/>
        </div>
        <div className='location'>
            <span className='location-icon'><i class='bx bx-location-plus' style={{color:'white'}} ></i></span>
            <div className='location-txt'>
                <p className='line1'>Hello</p>
                <p className='line2'>Select Your Address</p>
            </div>
        </div>
        <div className='nav-search'>
            <div className='select-nav'>
                <select>
                    <option>All</option>
                </select>
            </div>
            <div className='input-serach'>
                <input type='text' placeholder='Search Amazon.in' />
            </div>
            <div className='serach-icon'><i class='bx bx-search' style={{color:'black'}}></i></div>
        </div>
        <div className='nav-language'>
            <span className='lang-flag'><img src='/image/india.png' alt='lang-flg'
            /></span>
            <div className='lang-select'>
                <select>
                    <option>EN</option>
                </select>
            </div>
        </div>
        <div className='login'>
            <p className='line1'>Hello,sign in</p>
            <p className='line2'>Account & Lists
                <select>
                    <option></option>
                </select></p>
          
        </div>
        <div className='order'>
            <p className='line1'>Returns</p>
            <p className='line2'>& Orders</p>
        </div>
        <div className='cart'>
            <div className='signin'>
                Sign in <i class='bx bx-chevron-right'></i><i class='bx bx-user'></i>
            </div>
         <div className='cart-icon'><i class='bx bx-cart-add'></i></div>
            <p className='line2'>Cart</p>
        </div>  
    </nav>
    <div className='nav-p2'>
        <div className='input-nav-p2'>
            <input type='text' placeholder='Search Amazon.in'/>
            <div className='serach-icon'><i class='bx bx-search' style={{color:'black'}}></i></div>
        </div>
        <div className='nav-p2-links'>
            <span className='nav-p2 pa'>
                <p style={{fontSize:'14px'}}>Shop By</p>
                <p style={{fontSize:'16px',paddingTop:'2px'}}>Category</p>
            </span>

            <ul>
                <li><a href='/'>Your Lists</a></li>
                <li><a href='/'>Deals</a></li>
                <li><a href='/'>Sell</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar