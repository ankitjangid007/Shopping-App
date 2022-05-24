import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
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
      <Link to='/wishlist'>
        <div className="wishlist_icon">
          <BsFillBookmarkHeartFill />
          <span className='badge'>{wishlistCount}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header