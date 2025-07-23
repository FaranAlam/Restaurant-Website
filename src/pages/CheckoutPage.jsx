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
