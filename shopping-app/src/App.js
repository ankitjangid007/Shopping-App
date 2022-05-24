import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route element='404 Not Found!' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
