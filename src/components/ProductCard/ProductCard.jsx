import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
        <p className="text-orange-500 font-bold text-xl">${product.price}</p>
        <Link to={`/products/${product.id}`}>
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
