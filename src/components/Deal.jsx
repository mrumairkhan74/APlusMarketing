import React from 'react';

const Deal = () => {
  const dealItems = [
    'Residential Plots',
    'Commercial Plots',
    'Houses',
    'Shops',
    'Apartments'
  ];

  return (
    <section className="px-4 py-6 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl font-bold  mb-6">
        We Deal In
      </h2>

      <ul className="flex flex-wrap justify-center gap-3">
        {dealItems.map((item, i) => (
          <li
            key={i}
            className="bg-white px-4 py-2 rounded-md text-yellow-700 font-bold font-mono text-sm sm:text-base shadow transition hover:shadow-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Deal;
