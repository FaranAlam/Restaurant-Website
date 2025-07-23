const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-10">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">MyRestaurant</span> — All rights reserved.
      </p>

      <p className="text-sm">
        Designed & Developed by{" "}
        <a
          href="https://wa.me/923334051830?text=Hello%2C%20I%20visited%20your%20restaurant%20website%20and%20want%20to%20connect%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 underline hover:text-green-300 font-semibold"
        >
          Faran Alam
        </a>{" "}
        | Passionate about restaurants & web development
      </p>
    </footer>
  );
};

export default Footer;
