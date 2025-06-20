import { useCart } from '../../context/CartContext';
import { FiTrash2, FiArrowRight } from 'react-icons/fi';
import { FaCartPlus, FaPaypal } from 'react-icons/fa';

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Column */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="text-center text-2xl font-bold text-orange-600">CanvasCraft</div>

          {/* Express Checkout */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Express Checkout</h3>
            <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
              <FaPaypal /> Pay with PayPal
            </button>
          </div>

          {/* Email Section */}
          <div className="bg-white p-4 rounded shadow space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center border rounded-full font-bold">1</div>
              <p className="text-md font-semibold">Enter Your Email</p>
            </div>
            <p className="text-sm text-gray-500">New customer? Receive 10% off your first order. Already have an account? You'll be prompted to log in.</p>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <input type="email" placeholder="Enter your email" className="flex-grow p-2 outline-none" />
              <button className="bg-orange-500 text-white p-2">
                <FiArrowRight />
              </button>
            </div>
            <p className="text-xs text-gray-400">By providing your email, you agree to our <a href="#" className="text-orange-500 underline">Privacy Policy</a> and <a href="#" className="text-orange-500 underline">Terms of Service</a>.</p>
          </div>

          {/* Step 2: Shipping */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center border rounded-full font-bold">2</div>
            <p className="text-md font-semibold">Shipping</p>
          </div>

          {/* Step 3: Payment Method */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center border rounded-full font-bold">3</div>
            <p className="text-md font-semibold">Payment Method</p>
          </div>
        </div>

        {/* Right Column - Cart Summary */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaCartPlus className="text-xl" />
              <span>Cart ({cartItems.length})</span>
            </div>
            <div className="font-bold text-orange-600 text-lg">${getTotal()}</div>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-3">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded hover:bg-gray-300">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded hover:bg-gray-300">+</button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                <FiTrash2 />
              </button>
            </div>
          ))}

          <div className="pt-4">
            <input type="text" placeholder="Gift or Promo Code" className="w-full p-2 border rounded mb-2" />
            <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-black">Apply</button>
          </div>

          <div className="pt-4 border-t text-sm text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold text-md text-black">
              <span>Total</span>
              <span>${getTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
