import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Wishlist.css'
import { MdDeleteForever } from 'react-icons/md'
import { BsStarFill } from 'react-icons/bs'
import { removeWishlistedItem } from '../../redux/actions/productAction'
import { Link } from 'react-router-dom'

const Wishlist = () => {

  const items =  useSelector(state => state.wishlist.items)
  const dispatch = useDispatch()

  const removeFromWishlist = (id) => {
    dispatch(removeWishlistedItem(id))
  }

  return (
    <div className="container">
        <div className="row">
          <div className="card">
            {Object.keys(items).length === 0 ? (
              <div className='empty__list'>Your Wishlist is empty</div>
              ) : (
                <>
                  <h5 className='wishlist_header'>My Wishlist <span>({items.length} items)</span></h5>
                  {items.map(item => {
                    console.log(item)
                    const { id, title, image, price, rating } = item;
                    return (
                      <div className="card-body card_border">
                        <div className="item d-flex">
                          <div className="img">
                            <img src={image} alt={title} />
                          </div>
                          <div className="card_details">
                            <MdDeleteForever onClick={() => removeFromWishlist(id)} />
                            <span className='wishlist__stock'>In Stock</span>
                            <Link to={`/product/${id}`}>
                              <span className='wishlist__title'>{title}</span>
                            </Link>
                            <div className='d-flex'>
                              <span className='wishlist__rating'>{rating.rate} <BsStarFill /></span>
                              <span className='rating__count'>({rating.count})</span>
                            </div>
                            <span className='wishlist__price'>${price}</span>
                            <div className="buttons">
                              <button className='btn btn-outline-success'>Add to cart</button>
                              <button className='btn btn-outline-danger remove_btn'  onClick={() => removeFromWishlist(id)}>Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                </>
              )}
          </div>
        </div>
      </div>
  )
}

export default Wishlist