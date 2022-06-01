import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../redux/actions/productAction";
import ProductComponent from "./products/ProductComponent";
import './ProductListing.css'

const ProductListing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="productListing row m-0">
      <ProductComponent />
    </div>
  );
};

export default ProductListing