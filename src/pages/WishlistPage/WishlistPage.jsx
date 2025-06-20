import React from "react";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample wishlist data
const wishlistData = [
  {
    id: 1,
    name: "Sunset Canvas Art",
    image: "https://i.postimg.cc/hvZL7xRM/easy-glue-resist-art.jpg", // Replace with your hosted image
    price: 49.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Abstract Ocean Art",
    image: "https://i.postimg.cc/yx3dvSSL/mini.jpg",
    price: 79.99,
    inStock: false,
  },
  {
    id: 3,
    name: "Minimalist Mountains",
    image: "https://i.postimg.cc/hhFGwPLc/star.jpg",
    price: 39.99,
    inStock: true,
  },
];

const WishlistPage = () => {
  const handleRemove = (id) => {
    console.log("Remove product with id:", id);
  };

  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="text-center mb-6">
        <FaHeart className="mx-auto text-orange-600 text-5xl" />
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">My Wishlist</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg text-sm sm:text-base">
          <thead className="bg-orange-600 text-white">
            <tr className="text-left">
              <th className="px-2 py-3 sm:px-4">Product</th>
              <th className="px-2 py-3 sm:px-4">Price</th>
              <th className="px-2 py-3 sm:px-4">Stock Status</th>
              <th className="px-2 py-3 sm:px-4">Action</th>
              <th className="px-2 py-3 sm:px-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData.map((product, index) => (
              <tr
                key={product.id}
                className="border-b hover:bg-orange-50 transition text-sm sm:text-base"
              >
                <td className="px-2 py-3 sm:px-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded shadow"
                    />
                    <span className="font-semibold">
                      {index + 1}. {product.name}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-3 sm:px-4">${product.price.toFixed(2)}</td>
                <td className="px-2 py-3 sm:px-4">
                  {product.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-red-600 font-medium">Stock Out</span>
                  )}
                </td>
                <td className="px-2 py-3 sm:px-4">
                  {product.inStock ? (
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 text-sm"
                    >
                      Contact Us
                    </Link>
                  )}
                </td>
                <td className="px-2 py-3 sm:px-4">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemove(product.id)}
                  >
                    <FaTrashAlt className="text-lg sm:text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishlistPage;
