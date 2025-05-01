import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="relative bg-gray-50 h-[80vh] flex items-center">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Redefine Your Style with <br />
          <span className="text-indigo-600">Premium Wear</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Explore timeless collections crafted for elegance and comfort.
        </p>
        <Link to="/products" className=" hover:text-gray-900">
          <button className="w-fit bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="flex items-center justify-center">
        <Link to="/products" className=" hover:text-gray-900">
          <img
            src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1400"
            alt="E-commerce Hero"
            className="rounded-3xl shadow-xl object-cover max-h-[500px] w-full"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default Home;
