// src/components/DishCard.js
const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{dish.name}</h3>
        <p className="text-gray-600">{dish.category}</p>
        <p className="text-red-600 font-bold">{dish.price}</p>
      </div>
    </div>
  );
};

export default DishCard;
