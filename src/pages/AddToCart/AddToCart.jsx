import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-md shadow-sm">
      <img src={product.image} alt={product.name} className="w-full h-65 object-cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-orange-600 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;