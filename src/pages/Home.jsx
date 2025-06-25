import React from 'react';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdVerifiedUser } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";

import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import PeopleReview from '../components/PeopleReview';
import Deal from '../components/Deal';

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Deal Section */}
      <div className="text-center w-full mb-16">

        <Deal />
      </div>

      {/* Featured Properties */}
      <div className="text-center w-full mb-16">
        <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold mb-6">All Featured Properties</h2>
        <PropertyCard />
      </div>

      {/* People Review */}
      <div className="text-center w-full mb-16">
        <PeopleReview />
      </div>

      {/* Why Choose Us */}
      <div className="my-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">Why Choose A+ Marketing?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {/* Card 1 */}
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4 text-yellow-600 text-4xl">
              <VscWorkspaceTrusted />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">Trusted by 1,000+ Clients</h3>
            <p>We’ve helped families and investors make smart real estate decisions.</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4 text-yellow-600 text-4xl">
              <MdVerifiedUser />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">Verified Properties</h3>
            <p>All listings are verified and up-to-date with genuine sellers.</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="flex justify-center mb-4 text-yellow-600 text-4xl">
              <GrUserExpert />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-gray-800">Local Experts</h3>
            <p>Our team knows Jinnah Garden and nearby societies better than anyone.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-700 text-white p-6 sm:p-10 rounded-lg text-center my-16 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Looking for Your Dream Plot?</h2>
        <p className="mb-6 text-base sm:text-lg">Let A+ Marketing guide your next smart move in real estate.</p>
        <a
          href="/contact"
          className="bg-white text-yellow-700 px-6 py-2 text-base sm:text-lg font-semibold rounded hover:bg-gray-100 transition"
        >
          Contact Us Today
        </a>
      </div>

      {/* News & Updates */}
      <div className="my-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Latest News & Updates</h2>
        <p className="text-gray-500 italic text-sm sm:text-base">Coming soon... stay tuned!</p>
      </div>
    </section>
  );
};

export default Home;
