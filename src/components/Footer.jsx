import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container mx-auto p-10 bg-slate-900 text-white mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex gap-2 items-center">
            <h3 className="text-lg font-bold">Shopsy</h3>
          </div>
          <p className="mt-2">Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Links</h3>
          <ul className="list-none mt-2">
            <li>
              <Link to="/" className="no-underline hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="no-underline hover:underline">Cart</Link>
            </li>
            <li>
              <Link to="/wishlist" className="no-underline hover:underline">Wishlist</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Guides</h3>
          <ul className="list-none mt-2">
            <li>React</li>
            <li>React Bootstrap</li>
            <li>React Router</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <form className="flex items-center mt-2">
            <div className="w-full flex">
                <input id="email" type="email" placeholder="name@example.com"
                  className="w-full p-3 bg-green-100 rounded h-12" />
                <button className="ml-2 bg-green-100 rounded h-12 w-12 flex justify-center items-center">
                  <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                </button>
            </div>

          </form>

          <div className="flex justify-between mt-4 text-3xl">
            <i className="fa-brands fa-twitter text-blue-400"></i>
            <i className="fa-brands fa-facebook-f text-blue-700"></i>
            <i className="fa-brands fa-instagram text-pink-500"></i>
            <i className="fa-brands fa-youtube text-red-600"></i>
            <i className="fa-brands fa-linkedin-in text-blue-500"></i>
            <i className="fa-brands fa-github text-white"></i>
          </div>
        </div>
      </div>
      <p className="text-center mt-6">Copyright © Jan 2024, Shopsy. Styled with Tailwind CSS.</p>
    </div>

  );
};

export default Footer;