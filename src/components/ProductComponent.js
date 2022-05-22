import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProductComponent.css'

const ProductComponent = ({byCategory}) => {
  
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="productComponent" key={id}>
            <div className="card" style={{width: '18rem'}}>
              <Link to={`/product/${id}`}>
                  <img className="card-img-top" src={image} alt={title} />
                  <hr style={{width: '80%'}} />
                  <div className="card-body">
                      <div className="title">{title}</div>
                      <div className="price_cat">
                        <div className="price">$ {price}</div>
                        <div className="category">{category}</div>
                      </div>
                  </div>
              </Link>
            </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent