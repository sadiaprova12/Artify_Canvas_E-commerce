import { useCart } from '../../context/CartContext';
import { FiTrash2 } from 'react-icons/fi';
import { FaPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

const Checkout = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getSubtotal = () => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const shippingCharge = 10; // Flat rate shipping
const taxRate = 0.1; // 10%
const discountRate = 0.05; // 5%

const subtotal = getSubtotal();
const tax = subtotal * taxRate;
const discount = subtotal * discountRate;
const total = subtotal + shippingCharge + tax - discount;


  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl font-bold mb-8">CanvasCraft</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* First Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Checkout</h2>

          {/* Customer Details */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">Customer Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" className="p-2 border rounded" />
              <input type="text" placeholder="Last Name *" className="p-2 border rounded" />
              <input type="email" placeholder="Email *" className="p-2 border rounded col-span-2" />
              <div className="flex border rounded overflow-hidden col-span-2">
                <select className="px-2 bg-gray-100">
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                </select>
                <input type="text" placeholder="00000 00000" className="flex-1 p-2 outline-none" />
              </div>
            </div>
            <p className="text-sm text-gray-600 pt-2">New customer? Receive 10% off your first order. Already have an account? You'll be prompted to log in.</p>
            <p className="text-sm text-gray-600">By providing your email, you agree to our Privacy Policy and Terms of Service.</p>
          </div>

          {/* Shipping Details */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">Shipping Details</p>
            <input type="text" placeholder="Street Address *" className="w-full p-2 border rounded" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Postal Code *" className="p-2 border rounded" />
              <input type="text" placeholder="City *" className="p-2 border rounded" />
              <select className="p-2 border rounded">
                <option value="India">Bangladesh</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <p className="font-semibold text-lg">Payment Method</p>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <FaPaypal className="text-blue-600" />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <FaCcVisa className="text-blue-800" />
                <FaCcMastercard className="text-red-600" />
                Credit or Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                COD
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Card Number *" className="p-2 border rounded col-span-2" />
              <input type="text" placeholder="Expiry Date *" className="p-2 border rounded" />
              <input type="text" placeholder="CVV *" className="p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Second Column - Order Summary */}
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold">Cart ({cartItems.length})</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-3">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
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

          <input type="text" placeholder="Gift or Promo Code" className="w-full p-2 border rounded" />
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Apply</button>

          <div className="pt-4 border-t text-sm text-gray-600 space-y-2">
  <div className="flex justify-between">
    <span>Subtotal</span>
    <span>${getSubtotal().toFixed(2)}</span>
  </div>
  <div className="flex justify-between">
    <span>Shipping Charge</span>
    <span>${shippingCharge.toFixed(2)}</span>
  </div>
  <div className="flex justify-between">
    <span>Tax (10%)</span>
    <span>${tax.toFixed(2)}</span>
  </div>
  <div className="flex justify-between text-green-600">
    <span>Discount (5%)</span>
    <span>- ${discount.toFixed(2)}</span>
  </div>
  <div className="flex justify-between font-bold text-md text-black border-t pt-2">
    <span>Total</span>
    <span>${total.toFixed(2)}</span>
  </div>
</div>


          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
