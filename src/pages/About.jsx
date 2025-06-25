import React from 'react';

const About = () => {
    const owners = [
        {
            name: 'Muhammad Aqib',
            phone: '+92 335 5500590',
            email: 'aqibkhan3578@gmail.com',
            image: 'https://res.cloudinary.com/mrumairkhan74/image/upload/v1750613895/aqib_d28zas.jpg' // Replace with real image
        },
        {
            name: 'Muhammad Kashif',
            phone: '+92 333 7654321',
            email: 'muhammadkashif@gmail.com',
            image: 'https://res.cloudinary.com/mrumairkhan74/image/upload/v1750686245/WhatsApp_Image_2025-06-23_at_18.42.24_e7vwku.jpg' 
        },
        {
            name: 'Shah Mehmood Afridi',
            phone: '+92 333 5238989',
            email: 'smafridiit@gmail.com',
            image: 'https://' 
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-yellow-700 mb-6">About Us</h1>

            <p className="text-lg text-gray-600 text-center mb-12">
                A+ Marketing is your trusted real estate partner, specializing in the sale of residential and commercial plots in Jinnah Garden. 
                With years of industry experience and a reputation for honesty, our team is dedicated to helping you find the perfect investment opportunity. 
                Whether you're buying your first property or expanding your portfolio, we are committed to guiding you with expertise and care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {owners.map((owner, index) => (
                    <div key={index} className="bg-white shadow-md border border-yellow-700 rounded-xl p-6 flex flex-col items-center text-center">
                        <img
                            src={owner.image}
                            alt={owner.name}
                            className="w-36 h-36 rounded-full object-cover border-2 border-yellow-500 mb-4"
                        />
                        <h2 className="text-xl font-bold text-gray-800">{owner.name}</h2>
                        <p className="text-gray-600 mt-2"><strong>Phone:</strong> {owner.phone}</p>
                        <p className="text-gray-600"><strong>Email:</strong> <a href={`mailto:${owner.email}`} className="text-yellow-500">{owner.email}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
