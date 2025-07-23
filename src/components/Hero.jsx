import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      {/* Background Hero */}
      <motion.div
        className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/bg.jpg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-10 rounded-xl text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Delicious Food, Delivered Fresh
          </h1>
          <p className="text-lg mb-6">
            Explore our menu and enjoy the best flavors in town
          </p>
          <div className="space-x-4">
            <Link to="/reservation">
              <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full text-white font-semibold">
                Order Now
              </button>
            </Link>
            <Link to="/menu">
              <button className="bg-white hover:bg-gray-100 text-red-500 px-6 py-2 rounded-full font-semibold">
                View Menu
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Welcome Section */}
      <motion.section
        className="bg-yellow-100 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold text-red-700">
          Welcome to FoodiesHub
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Deliciousness delivered daily.
        </p>
        <Link to="/reservation">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            Reservation
          </button>
        </Link>
      </motion.section>
    </>
  );
}

export default Hero;
