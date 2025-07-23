import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems = [], removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-yellow-50 p-4 rounded-xl shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-700">
                      Quantity: {item.quantity || 1}
                    </p>
                    <p className="text-green-700 font-bold">
                      ${item.price * (item.quantity || 1)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xl text-right text-green-700 font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <div className="flex items-center justify-between mt-6">
            <Link to="/checkout">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                Proceed to Checkout
              </button>
            </Link>

            <button
              onClick={clearCart}
              className="text-red-600 text-sm hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
