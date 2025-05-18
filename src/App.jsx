// src/App.jsx
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatBot from './components/ChatBot';
import React from 'react';
function App() {
  return (
    <div className="font-sans">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatBot />
    </div>
  );
}

export default App;
