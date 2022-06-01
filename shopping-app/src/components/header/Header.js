import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { FaShoppingCart, FaUserCircle, FaBars } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {

  const [show, setShow] = useState(false)
  const wishlistCount = useSelector(state => state.wishlist.items.length)
  const cartCount = useSelector(state => state.cart.cartItem.length)

  const toggleNavbar = () => {
    setShow(!show)
  }

  return (
    <header className='header'>
      <nav className="navbar">
              <Link to='/' className="nav-logo">SHOPPING</Link>
              <ul className={show ? 'nav-menu show-nav-menu' : 'nav-menu'}>
                  <li className="nav-item" onClick={toggleNavbar}>
                    <Link to='/wishlist'>
                      <div className="icon nav-link">
                        <BsFillBookmarkHeartFill />
                        <span className='badge'>{wishlistCount}</span>
                      </div>
                      <span className='icon-title'>MY WISHLIST</span>
                    </Link>
                  </li>
                  <li className="nav-item" onClick={toggleNavbar}>
                    <Link to='/cart'>
                      <div className="icon nav-link">
                        <FaShoppingCart />
                        <span className='badge'>{cartCount}</span>
                      </div>
                      <span className='icon-title'>MY CART</span>
                    </Link>
                  </li>
                  <li className="nav-item" onClick={toggleNavbar}>
                    <div className="nav-link">
                      <FaUserCircle />
                    </div>
                  </li>
              </ul>
              <div className="hamburger nav-link" onClick={toggleNavbar}>
                <FaBars />
              </div>
          </nav>
      </header>
  )
}

export default Header