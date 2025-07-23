import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 mb-6">Your cart is empty.</p>
      ) : (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Your Order:</h3>
          <ul className="bg-gray-100 p-4 rounded">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
            <hr className="my-2" />
            <li className="flex justify-between font-bold">
              <span>Total</span>
              <span>
                $
                {cart
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
              </span>
            </li>
          </ul>
        </div>
      )}

      <form onSubmit={handleCheckout} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Delivery Address"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
