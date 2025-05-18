// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaClock, FaLock, FaUsers, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaClock size={28} />,
    title: 'Instant Quotes',
    description: 'Receive license valuations instantly with our smart tool.',
  },
  {
    icon: <FaLock size={28} />,
    title: 'Secure Transactions',
    description: 'Your data and transactions are encrypted and protected.',
  },
  {
    icon: <FaUsers size={28} />,
    title: 'Trusted by Thousands',
    description: 'Over 1000 happy clients have sold licenses with us.',
  },
  {
    icon: <FaHeadset size={28} />,
    title: '24/7 Support',
    description: 'Our team is here to help anytime, anywhere.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 border rounded-md shadow-sm bg-gray-50 dark:bg-gray-900 dark:border-gray-700"
          >
            <div className="text-indigo-600">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
