import { useParams } from 'react-router-dom';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="p-6 text-red-500 font-bold">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded shadow" />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-orange-600 mb-6">${product.price}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
