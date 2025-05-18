# SoftSell - React + Tailwind One-Page Website

A fully responsive single-page website built for the **Credex Web Development Internship Assignment**.

---

## 🚀 Live Demo

👉 [Live Site URL](#) (to be added after deployment)

---

## 🧩 Features Implemented

- ✅ **Hero Section** with headline, subheading, and CTA
- ✅ **How It Works** with 3-step visual process
- ✅ **Why Choose Us** with icons and bullet-style tiles
- ✅ **Testimonials** from fictional users
- ✅ **Contact Form** with:
  - Frontend validation
  - Dropdown for license types
- ✅ **Responsive Design** using Tailwind CSS
- ✅ **Light/Dark Mode Support**
- ✅ **SEO Meta Tags and Page Title**
- ✅ **Favicon and Placeholder Logo**
- ✅ **Mock AI-Powered ChatBot**
  - Hardcoded Q&A
  - Simple toggled widget
  - Simulates real LLM interaction

---

## ✨ Design Choices

- **Tailwind CSS**: Fast styling with utility classes
- **Minimalist Layout**: Focus on clarity and conversion
- **Dark Mode Toggle**: User-friendly accessibility
- **ChatBot**: Kept simple to simulate real LLM integration

---

## 📦 Tech Stack

- React.js + Vite
- Tailwind CSS
- Icons: react-icons
- Optional: Framer Motion (not used but easy to add)

---

## 🕒 Time Spent

| Task                    | Time      |
|-------------------------|-----------|
| Initial Project Setup   | ~30 mins  |
| UI Sections             | ~3 hours  |
| Styling & Responsiveness| ~1.5 hours|
| Validation & ChatBot    | ~2 hours  |
| README + Meta Setup     | ~30 mins  |

**Total Time**: ~7.5 hours

---

## 📁 Project Setup

```bash
git clone https://github.com/your-username/softsell
cd softsell
npm install
npm run dev

softsell/
├── public/
│   └── favicon.ico                 # Optional favicon
│
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── ChatBot.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   │
│   ├── App.jsx                     # Main page layout
│   ├── index.css                   # Tailwind base styles
│   └── main.jsx                    # React entry point
│
├── index.html                      # Vite HTML template
├── package.json                    # Project metadata and dependencies
├── postcss.config.js               # PostCSS config (Tailwind)
├── tailwind.config.js              # Tailwind custom config
├── vite.config.js                  # Vite config
└── README.md                       # Project documentation

