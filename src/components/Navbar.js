import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-yellow-300">
          <img src="/logo.jpg" alt="Restaurant Logo" className="w-12 h-12 rounded-full" />
          Restaurant
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-medium items-center">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/menu" className="hover:text-yellow-300 transition">Menu</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/blog" className="hover:text-yellow-300 transition">Blog</Link>
          <Link to="/cart" className="hover:text-yellow-300 transition">Cart</Link>
          <Link to="/reservation" className="hover:text-yellow-300 transition">Reserve</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>

          {/* Cart Button */}
          <Link
            to="/checkout"
            className="bg-yellow-300 text-red-700 px-4 py-1 rounded hover:bg-yellow-400 transition font-semibold ml-4"
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-yellow-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-600 px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Menu</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">About</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Cart</Link>
          <Link to="/reservation" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Reserve</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-300">Contact</Link>

          {/* Mobile Cart Button */}
          <Link
            to="/checkout"
            onClick={() => setMenuOpen(false)}
            className="block bg-yellow-300 text-red-700 px-4 py-2 rounded text-center font-semibold"
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
