import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted! We'll contact you soon.");
    console.log("Reservation Data:", formData);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <section className="bg-yellow-50 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Book a Table
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              className="w-1/2 p-3 border rounded"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              className="w-1/2 p-3 border rounded"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="number"
            name="guests"
            min="1"
            max="20"
            placeholder="Number of Guests"
            className="w-full p-3 border rounded"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Submit Reservation
          </button>
        </form>
      </section>
    </div>
  );
};

export default Reservation;
