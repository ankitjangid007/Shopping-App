import React from 'react'
import ProductListing from './ProductListing'

const Home = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-3">Category</div>
            <div className="col-6">
                <ProductListing />
            </div>
            <div className="col-3">Cart</div>
        </div>
    </div>
  )
}

export default Home