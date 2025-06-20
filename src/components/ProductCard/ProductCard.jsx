import { useCart } from "../../context/CartContext";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa"; // Icons for rating and wishlist
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  const handleWishlist = () => {
    setLiked(!liked);
    // Optionally: Call a context or API for favorites
  };

  return (
    <div className="border p-4 rounded-md shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
      <div className="relative overflow-hidden group">
        {/* Wishlist Icon */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 bg-white p-1 rounded-full z-10"
        >
          {liked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-600" />
          )}
        </button>

        {/* Product Image with Zoom on Hover */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110 rounded"
        />
      </div>

      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-orange-600 font-bold">${product.price}</p>

     {/* Rating */}
<div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
  {[...Array(5)].map((_, index) => {
    const fullStar = index + 1 <= Math.floor(product.rating);
    const halfStar =
      index + 1 > Math.floor(product.rating) &&
      index < product.rating;

    return (
      <span key={index}>
        {fullStar ? (
          <FaStar className="text-yellow-500" />
        ) : halfStar ? (
          <FaStar className="text-yellow-500 opacity-50" />
        ) : (
          <FaStar className="text-gray-300" />
        )}
      </span>
    );
  })}
  <span className="ml-1 text-gray-500 text-xs">({product.rating})</span>
</div>



      {/* View Details Button */}
      <button
        className="mt-3 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
        onClick={() => alert("Navigate to product details")}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
