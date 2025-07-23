import { useState } from "react";

// Sample dishes with categories
const sampleDishes = [
  {
    id: 1,
    name: "Spicy Chicken Biryani",
    category: "Biryani",
    image: "/dishes (1).jpg",
    price: 12.99,
  },
  {
    id: 2,
    name: "Classic Beef Burger",
    category: "Burgers",
    image: "/dishes (2).jpg",
    price: 9.49,
  },
  {
    id: 3,
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    image: "/dishes (3).jpg",
    price: 11.99,
  },
  {
    id: 4,
    name: "Tandoori Chicken",
    category: "Grill",
    image: "/dishes (4).jpg",
    price: 13.5,
  },
  {
    id: 5,
    name: "Veggie Delight Pizza",
    category: "Pizza",
    image: "/dishes (5).jpg",
    price: 10.99,
  },
  {
    id: 6,
    name: "Paneer Tikka",
    category: "Appetizers",
    image: "/dishes (6).jpg",
    price: 8.99,
  },
  {
    id: 7,
    name: "Fish & Chips",
    category: "Seafood",
    image: "/dishes (7).jpg",
    price: 12.49,
  },
  {
    id: 8,
    name: "Chicken Shawarma",
    category: "Wraps",
    image: "/dishes (8).jpg",
    price: 9.25,
  },
  {
    id: 9,
    name: "Cold Coffee",
    category: "Drinks",
    image: "/dishes (9).jpg",
    price: 4.75,
  },
  {
    id: 10,
    name: "Grilled Mutton Chops",
    category: "Grill",
    image: "/dishes (10).jpg",
    price: 14.99,
  },
  {
    id: 11,
    name: "Pasta Primavera",
    category: "Pasta",
    image: "/dishes (11).jpg",
    price: 10.99,
  },
  {
    id: 12,
    name: "Cheese Burst Pizza",
    category: "Pizza",
    image: "/dishes (12).jpg",
    price: 11.49,
  },
  {
    id: 13,
    name: "Mint Margarita",
    category: "Drinks",
    image: "/dishes (13).jpg",
    price: 3.99,
  },
  {
    id: 14,
    name: "Butter Chicken",
    category: "Curry",
    image: "/dishes (14).jpg",
    price: 13.25,
  },
  {
    id: 15,
    name: "Fruit Salad Bowl",
    category: "Dessert",
    image: "/dishes (15).jpg",
    price: 6.99,
  }
];

// Categories to choose from
const categories = ["All", "Biryani", "Burgers", "Drinks", "Pizza"];

const Menu = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDishes = sampleDishes
    .filter((dish) => {
      const matchesSearch = dish.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || dish.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">Our Menu</h1>

      {/* Filters: Search, Sort, Category */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-between mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search dishes..."
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/4"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Dish Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{dish.name}</h2>
                <p className="text-gray-600">${dish.price.toFixed(2)}</p>
                <span className="text-sm text-gray-400">{dish.category}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">No dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
