import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {

  const wishlistCount = useSelector(state => state.wishlist.items.length)
  
  return (
    <div className='navbar navbar-default navbar-fixed-top'>
      <div className="logo">
        <Link to='/'>
          <span>Shopping</span>
        </Link>
      </div>
      <div className="icons">
        <Link to='/wishlist'>
          <div className="wishlist_icon">
            <BsFillBookmarkHeartFill />
            <span className='badge'>{wishlistCount}</span>
          </div>
        </Link>
        <Link to='/cart'>
          <div className="cart__icon">
            <FaShoppingCart />
            <span className='badge'>0</span>
          </div>
        </Link>

        <div className="user__icon">
          <FaUserCircle />
        </div>
      </div>
        <div className="bar__icon">
          <FaBars />
        </div>
    </div>
  )
}

export default Header