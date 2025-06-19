import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-orange-600">ArtifyCanvas</Link>
      <div className="flex gap-6">
        <Link to="/products" className="hover:text-orange-500">Products</Link>
        <Link to="/cart" className="relative hover:text-orange-500">
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
