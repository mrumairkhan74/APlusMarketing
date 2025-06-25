import React from 'react';

const reviews = [
    {
        name: "Umair Khan",
        message: "A+ Marketing helped me find a perfect plot in Jinnah Garden. The process was smooth and transparent. Highly recommended!",
        location: "Islamabad",
        rating: 5,
        image: './images/boy.jpg'
    },
    {
        name: "Asad Khan",
        message: "Professional team and excellent customer service. They truly care about what you need. Great experience!",
        location: "Rawalpindi",
        rating: 5,
        image: './images/boy.jpg'
    },
    {
        name: "Aimon Naseem",
        message: "I invested in two plots with A+ Marketing and I'm very satisfied with their guidance and honest dealing.",
        location: "Bahria Town",
        rating: 5,
        image: './images/girl.jpg'
    }
];

const StarRating = ({ count }) => {
    return (
        <div className="flex justify-center text-yellow-500 text-lg mt-2">
            {'★'.repeat(count)}{'☆'.repeat(5 - count)}
        </div>
    );
};

const PeopleReview = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">What People Say About Us</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition duration-300">
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-blue-500"
                        />

                        <StarRating count={review.rating}/>
                        <p className="mt-4 text-gray-700 italic">"{review.message}"</p>
                        <div className="mt-4">
                            <p className="font-semibold text-lg text-yellow-800">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleReview;
