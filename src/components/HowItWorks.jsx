// src/components/HowItWorks.jsx
import React from 'react';
import { FaUpload, FaDollarSign, FaMoneyCheckAlt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload size={32} />,
    title: 'Upload License',
    description: 'Submit your unused software license in seconds.',
  },
  {
    icon: <FaDollarSign size={32} />,
    title: 'Get Valuation',
    description: 'Receive an instant quote based on market demand.',
  },
  {
    icon: <FaMoneyCheckAlt size={32} />,
    title: 'Get Paid',
    description: 'Get paid quickly and securely after approval.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded shadow w-full md:w-1/3">
            <div className="text-indigo-600 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
