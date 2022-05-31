import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './ProductComponent.css'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { addProductToCart, AddProductToWishlist, removeWishlistedItem } from '../../redux/actions/productAction'


const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  const items = useSelector(state => state.wishlist.items)
  const dispatch = useDispatch();

  const whistlistItemId = items.map(item => item.id)
  
  const addToWishlist = (item) => {
    dispatch(AddProductToWishlist({ id: item.id, title: item.title, image: item.image, price: item.price, category: item.category, description: item.description, rating: item.rating }))
  }
  
  const removeFromWishlist = (item) => {
    if(whistlistItemId.includes(item.id)) {
      dispatch(removeWishlistedItem(item.id))
    }
  }

  const addCartItem = (item) => {
    dispatch(addProductToCart(item))
  }


  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="productComponent" key={id}>
            <div className="card" style={{width: '18rem'}}>
              <Link to={`/product/${id}`}>
                  <img className="card-img-top" src={image} alt={title} />
              </Link>
                  <hr />
                  <div className="card-body">
                      <div className="title">{title}</div>
                      <div className="details">
                        <div className="price">$ {price}</div>
                        <div className="category">{category}</div>
                        {whistlistItemId.includes(id) ? (
                          <div className="wishlist" onClick={() => removeFromWishlist(product)}>
                              <BsHeartFill />
                          </div>
                          ) : (
                            <div className="wishlist" onClick={() => addToWishlist(product)}>
                                <BsHeart />
                            </div>
                          )
                        }
                      </div>
                  </div>
                  <Link to='/cart'>
                    <button className="btn btn-primary w-100" onClick={() => addCartItem(product)}>BUY</button>
                  </Link>
            </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent