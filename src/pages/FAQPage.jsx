// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => (
  <motion.div
    className={`faq-item ${isOpen ? 'open' : ''}`}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
  >
    <button
      className="w-full list-none cursor-pointer"
      onClick={onToggle}
    >
      <motion.div
        className="glass-card faq-card p-6 rounded-xl flex justify-between items-center hover:bg-surface-variant/40 transition-colors"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-headline-lg text-[20px] font-bold text-on-surface text-left">
          {question}
        </span>
        <motion.span
          className={`material-symbols-outlined text-primary faq-icon transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          expand_more
        </motion.span>
      </motion.div>
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
  </motion.div>
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
        <motion.header
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Everything you need to know about NovaDesk.
          </p>
        </motion.header>

        {/* Accordion Section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Decorative Image Section */}
        <motion.div
          className="mt-24 rounded-2xl overflow-hidden glass-card h-[400px] relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img
  alt="High-tech workspace"
  className="w-full h-full object-cover opacity-50"
  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <motion.div
            className="absolute bottom-8 left-8 right-8 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Still have questions?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Reach out to our 24/7 support team for immediate assistance.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default FAQPage;