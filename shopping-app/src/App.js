import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/productDetail/ProductDetail';
import Wishlist from './components/wishlist/Wishlist';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route element='404 Not Found!' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
