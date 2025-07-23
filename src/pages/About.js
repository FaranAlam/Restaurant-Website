const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          At <span className="font-semibold">MyRestaurant</span>, we serve
          delicious food made with love, tradition, and top-quality ingredients.
        </p>
      </section>

      <section className="bg-yellow-50 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2020, our restaurant was born out of a passion for cooking and
          bringing people together. From classic family recipes to modern dishes,
          we believe food connects us all.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Fresh, locally-sourced ingredients</li>
          <li>Friendly service that makes you feel at home</li>
          <li>Commitment to sustainability</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
