// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.company) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'Select a license type';
    if (!form.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted!');
      setForm({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded shadow-md">
        {['name', 'email', 'company'].map((field) => (
          <div key={field}>
            <label className="block font-medium mb-1 capitalize">{field}</label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <div>
          <label className="block font-medium mb-1">License Type</label>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          >
            <option value="">Select</option>
            <option value="Windows">Windows</option>
            <option value="Office">Microsoft Office</option>
            <option value="Adobe">Adobe</option>
            <option value="Other">Other</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
