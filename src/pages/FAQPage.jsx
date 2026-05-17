// src/pages/FAQPage.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is NovaDesk free?',
    answer: 'Yes, basic version is free forever.',
  },
  {
    question: 'Can I use it for teams?',
    answer: 'Yes, Pro and Team plan support collaboration.',
  },
  {
    question: 'Does it increase productivity?',
    answer: 'Depends if you actually use it.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Coming soon™',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button
      className="w-full list-none cursor-pointer"
      onClick={onToggle}
    >
      <div className="glass-card faq-card p-6 rounded-xl flex justify-between items-center hover:bg-surface-variant/40 transition-colors">
        <span className="font-headline-lg text-[20px] font-bold text-on-surface text-left">
          {question}
        </span>
        <span className={`material-symbols-outlined text-primary faq-icon transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </div>
    </button>
    <div
      className={`glass-card faq-answer border-t-0 -mt-2 pt-8 pb-6 px-6 rounded-b-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 py-0 px-0'
      }`}
    >
      <p className="font-body-md text-body-md text-on-surface-variant">
        {answer}
      </p>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Background Elements */}
      <div className="faq-nebula"></div>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-4 md:px-10 max-w-4xl mx-auto min-h-screen">
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to know about NovaDesk.
          </p>
        </header>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Decorative Image Section */}
        <div className="mt-24 rounded-2xl overflow-hidden glass-card h-[400px] relative">
          <img
            alt="High-tech workspace"
            className="w-full h-full object-cover opacity-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX_6afjyKITybmona-JcBNztUiQXEV6Tgj-h5hVZw_G3jTz1rSLu-fviAQRRsfuwUBl26RhtCCs-FwpFC6pMkrni-RyqJfUqi5UYkFbeaoTVxRs3vQc0bfPgcQ_F1b94MPLgL0jYLmznXdlXGr-GJXEQVXt-YtkaJsrc1GXHsF8t1VwyB87F00mguwKefRS2vcr8AMBbqJLLaQf1uKUVLWvSbSDTffCtkha84CaT_2dHOAa6Qd4hszsD92ImoziKUl3Wozb6RZNA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Still have questions?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Reach out to our 24/7 support team for immediate assistance.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQPage;