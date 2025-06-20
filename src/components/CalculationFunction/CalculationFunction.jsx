const getSubtotal = () => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const shippingCharge = 10; // Flat rate
const taxRate = 0.10; // 10%
const discountRate = 0.05; // 5%

const tax = getSubtotal() * taxRate;
const discount = getSubtotal() * discountRate;
const total = getSubtotal() + shippingCharge + tax - discount;
