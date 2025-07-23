import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Removed useNavigate (was unused)
import { useCart } from "../context/CartContext";

const dishes = [
  {
    id: 1,
    name: "Spicy Chicken Biryani",
    description: "Aromatic basmati rice with tender chicken and bold spices.",
    image: "/dishes (1).jpg",
    price: 8.99,
  },
  {
    id: 2,
    name: "Cheesy Beef Burger",
    description: "Juicy beef patty with melted cheddar and fresh lettuce.",
    image: "/dishes (2).jpg",
    price: 6.49,
  },
  {
    id: 3,
    name: "Veggie Delight Salad",
    description: "A colorful mix of fresh vegetables with Italian dressing.",
    image: "/dishes (3).jpg",
    price: 5.99,
  },
];

const FeaturedDishes = () => {
  const { addToCart } = useCart(); // ✅ Used properly

  const handleAddToCart = (dish) => {
    addToCart(dish);
    console.log("Added to cart:", dish); // Optional
    // Optional: toast or redirect logic
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Dishes
        </motion.h2>
        <p className="text-gray-600 mb-10">Our most loved picks by foodies</p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-red-700">{dish.name}</h3>
              <p className="text-gray-600 mt-2 mb-2">{dish.description}</p>
              <p className="text-lg font-bold text-green-700 mb-4">${dish.price}</p>
              <button
                onClick={() => handleAddToCart(dish)}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        <Link to="/menu">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedDishes;
