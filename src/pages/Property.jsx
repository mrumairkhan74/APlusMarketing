import React from 'react';

import PropertyCard from '../components/PropertyCard';
const Property = () => {
  
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl text-red-700 text-center font-bold mb-6">All Featured Properties</h2>

      <div className="flex gap-3 items-center">

        <PropertyCard />

      </div>
    </section>
  );
};

export default Property;
