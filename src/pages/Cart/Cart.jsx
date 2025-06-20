import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  if (cartItems.length === 0) {
    return <div className="p-6 text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
            <div>
              <h4 className="text-lg font-semibold">{item.name}</h4>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-xl"
                >
                  −
                </button>
                <span className="text-md font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 text-xl"
                >
                  +
                </button>
              </div>

              <p className="text-orange-500 font-bold mt-2">${item.price}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700 text-xl"
          >
            <FiTrash2 />
          </button>
        </div>
      ))}

      <div className="mt-6 text-right">
        <h3 className="text-xl font-bold">Total: ${getTotal()}</h3>
        <Link to="/checkout">
        <button className="mt-4 bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
          Proceed to Checkout
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Cart;
