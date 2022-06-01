import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct, addProductToCart, fetchProduct } from '../../redux/actions/productAction'
import './ProductDetail.css'
import ReactImageMagnify from 'react-image-magnify';

const ProductDetail = () => {

  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const { image, title, price, description } = product

  useEffect(() => {
    if(productId && productId !== '') {
      dispatch(fetchProduct(productId))
    }
    return () => {
      dispatch(removeSelectedProduct())
    }
  },[productId])

  const addCartItem = (item) => {
    dispatch(addProductToCart(item))
  }


  return (
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <div style={{position: 'relative'}} className='d-flex justify-content-center'>
            <div className="spinner-border" style={{width: "3rem", height: "3rem", position: 'absolute'}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow" style={{width: "3rem", height: "3rem", position: 'absolute'}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : 
        (
          <div className="row">
            <div className="card">
              <div className="card-body productDetailCard">
                  <div className="left col-md-4">
                    {/* <img src={image} alt={title} /> */}
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: `${title}`,
                            isFluidWidth: true,
                            src: `${image}`,
                            // imageStyle: {width: '70%'}
                        },
                        largeImage: {
                            src: `${image}`,
                            width: 1200,
                            height: 1200,
                            // enlargedImageStyle: {width: '70%'}
                        },
                        enlargedImagePosition: 'over',
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                    }} />
                  </div>
                  <div className="right col-md-8">
                    <div className="title">{title}</div>
                    <div className="price">Price: <span>${price}</span></div>
                    <div className="description">Description: <span>{description}</span></div>
                    <button className='btn btn-outline-success' onClick={() => addCartItem(product)}>Add to Cart</button>
                  </div>
              </div>
            </div>
          </div>
        )
        }
      </div>
  )
}

export default ProductDetail