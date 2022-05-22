import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='navbar navbar-default navbar-fixed-top'>
      <div className="logo">
        <Link to='/'>
          <span>Shopping</span>
        </Link>
      </div>
    </div>
  )
}

export default Header