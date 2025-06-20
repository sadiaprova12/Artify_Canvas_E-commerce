import { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FaHeart } from "react-icons/fa";


const Navbar = () => {
  const [country, setCountry] = useState("Bangladesh");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
      <div className="flex items-center justify-between px-12 py-3 border-b dark:border-gray-700 relative">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Hamburger (Mobile) */}
          <button
            className="text-2xl text-orange-600 sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold text-orange-600">ArtCanvas</div>
          </div>

        {/* Center: Delivery + Search Bar (Hidden on mobile) */}
        <div className="hidden sm:flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full max-w-3xl">
          {/* Delivery */}
          <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="text-orange-600" />
            <span>Delivery to</span>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-none bg-transparent focus:outline-none text-sm font-medium"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex flex-grow">
            <select
              className="border border-r-0 border-gray-300 bg-gray-100 text-sm px-2 rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Canvas Art</option>
              <option>Handmade</option>
              <option>Craft Supplies</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow px-3 py-2 border-t border-b border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            />
            <button className="bg-orange-600 p-4 rounded-r-md text-white">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right: Account + Cart (Always visible) */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="relative group hidden sm:block">
            <div className="flex flex-col items-start cursor-pointer group-hover:border border-orange-800 p-2">
              <span className="text-gray-500 dark:text-gray-300 ">Hello, Sign in</span>
              <span className="font-bold flex items-center gap-1">
                Account & Lists <FaAngleDown className="text-orange-600" />
              </span>
            </div>
            {/* Dropdown */}
            <div className="absolute top-15 left-0 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-30 ">
              <ul className="py-2 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Sign In</li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Register</li>
              </ul>
            </div>
          </div>

          <div className="hidden sm:flex flex-col cursor-pointer group-hover:border border-orange-800 p-2">
            <span className="text-gray-500 dark:text-gray-300">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>

          {/* Wishlist */}
<Link to="/wishlist" className="relative cursor-pointer">
  <FaHeart className="text-2xl text-orange-600" />
</Link>

          <Link to="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-orange-600" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown when menuOpen) */}
      {menuOpen && (
        <div className="sm:hidden px-4 py-3 space-y-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700 transition-all">
          {/* Delivery Location */}
          <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="text-orange-600" />
            <span>Delivery to</span>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-none bg-transparent focus:outline-none text-sm font-medium"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex">
            <select
              className="border border-r-0 border-gray-300 bg-gray-100 text-sm px-2 rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All</option>
              <option>Canvas Art</option>
              <option>Handmade</option>
              <option>Craft Supplies</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow px-3 py-2 border-t border-b border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            />
            <button className="bg-orange-600 p-2 rounded-r-md text-white">
              <FaSearch />
            </button>
          </div>

          {/* Mobile Account & Orders */}
          <div className="sm:hidden px-4 py-3 space-y-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700 transition-all">
            <div className="flex items-center justify-between ">
              <span>Hello, Sign in</span>
              <FaAngleDown className="text-orange-600" />
            </div>
            <div className="flex items-center justify-between">
              <span>Returns & Orders</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
