// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'IT Manager',
    company: 'TechCorp',
    feedback:
      'SoftSell made the process so smooth. We recovered thousands in unused licenses!',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    company: 'SoftLabs',
    feedback:
      'Super easy and efficient! I wish we had done this sooner. Highly recommended.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Customer Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded shadow-md border border-gray-200 dark:border-gray-700 text-center"
          >
            <p className="italic mb-4">“{review.feedback}”</p>
            <h4 className="font-semibold">{review.name}</h4>
            <p className="text-sm text-gray-500">
              {review.role}, {review.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

