import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetail';
import Cart from './pages/Cart/Cart';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
