import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleProceed = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-20">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {/* Cart items listed here */}
      {cartItems.map(item => (
        <div key={item.id} className="mb-4 flex gap-4 items-center">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>${item.price} × {item.quantity}</p>
          </div>
        </div>
      ))}

      <button
        onClick={handleProceed}
        className="mt-6 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;
