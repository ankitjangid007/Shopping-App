import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { BsStarFill } from 'react-icons/bs'
import { removeItemFromCart } from '../../redux/actions/productAction'
import { Link } from 'react-router-dom'

const Cart = () => {

  const items =  useSelector(state => state.cart.cartItem)
  const dispatch = useDispatch()
  const totalPrice = items.reduce((amount, item) => item.price + amount, 0)
  const deliveryCharge = 0

  console.log(totalPrice)

  const removeFromCart = (id) => {
    dispatch(removeItemFromCart(id))
  }

  return (
    <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="card col-md-7">
            {Object.keys(items).length === 0 ? (
              <div className='empty__list'>Your Shopping Cart is empty.</div>
              ) : (
                <>
                  <h5 className='cart_header border-0'>My Cart <span>({items.length} items)</span></h5>
                  {items.map(item => {
                    const { id, title, image, price, rating } = item;
                    return (
                      <div key={item.id} className="card-body card_border">
                        <div className="item d-flex">
                          <div className="img">
                            <img src={image} alt={title} />
                            <span>(-) 1 (+)</span>
                          </div>
                          <div className="card_details">
                            <span className='cart__title'>{title}</span>
                            <div className='d-flex'>
                              <span className='cart__rating'>{rating.rate} <BsStarFill /></span>
                              <span className='rating__count'>({rating.count})</span>
                            </div>
                            <span className='cart__price'>${price}</span>
                            <button className='btn btn-outline-danger'  onClick={() => removeFromCart(id)}>Remove</button>
                          </div>
                        </div>
                      </div>
                      )
                    })}
                </>
              )}
          </div>

          {Object.keys(items).length === 0 ? null :
            <div className="price__card card col-md-4">
                <h5 className='cart_header'>Price Details</h5>
              <div className="card-body card-border">
                <div className='row d-flex justify-content-between'>
                  <span>Price ({items.length})</span>
                  <span>{totalPrice}</span>
                </div>
                <div className='row d-flex justify-content-between'>
                  <span>Quantity</span>
                  <span>2</span>
                </div>
                <div className='row d-flex justify-content-between'>
                  <span>Delivery Charges</span>
                  <span>FREE</span>
                </div>
                <div className="row d-flex justify-content-between">
                  <span>Amount Payable</span>
                  <span>{totalPrice + deliveryCharge}</span>
                </div>
              </div>
              <div className='shop__btn'>
                <Link to='/'>
                  <button className='btn btn-outline-warning m-1 mb-3'>CONTINE SHOPPING</button>
                </Link>
                <button className='btn btn-outline-success m-1 mb-3'>PLACE ORDER</button>
              </div>
            </div>
          }
        </div>
      </div>
  )
}

export default Cart