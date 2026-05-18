'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Variants untuk animasi bertahap
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const PricingPage = () => {
  return (
    <motion.main
      className="relative pt-32 pb-24 px-4 md:px-10 max-w-[1440px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Orbs */}
      <div className="nebula-orb bg-primary-container w-[400px] h-[400px] -top-20 -left-20"></div>
      <div className="nebula-orb bg-tertiary-container w-[300px] h-[300px] bottom-0 -right-10"></div>
      {/* ... konten lainnya */}

      {/* Hero Section */}
      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display-lg text-display-lg text-white mb-4">
          Simple Pricing for Everyone
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-body-md text-body-md">
          Choose a plan that fits your workflow. Upgrade anytime.
        </p>
      </motion.div>

      {/* Pricing Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Free Plan */}
        <motion.div
          className="glass-card p-10 rounded-xl flex flex-col h-full"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="mb-8">
            <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              Basic
            </span>
            <h3 className="font-headline-lg text-headline-lg text-white mt-4">Free</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-on-surface-variant ml-2">/month</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Basic tasks</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Notes</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Limited storage</span>
            </li>
          </ul>

          <motion.button
            className="w-full py-4 border border-outline text-white rounded-full font-bold hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Pro Plan (Featured) */}
        <motion.div
          className="glass-card pro-glow p-10 rounded-xl flex flex-col h-full bg-surface-container-low border-primary/40 md:scale-105 relative"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-xl">
            MOST POPULAR
          </div>
          <div className="mb-8">
            <span className="bg-primary/20 text-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              Pro
            </span>
            <h3 className="font-headline-lg text-headline-lg text-white mt-4">Professional</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-white">$9</span>
              <span className="text-on-surface-variant ml-2">/month</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface">Unlimited tasks</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface">Time tracking</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface">Advanced Analytics</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface">Custom Integrations</span>
            </li>
          </ul>

          <motion.button
            className="w-full py-4 bg-primary-container text-on-primary-container rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Start Pro
          </motion.button>
        </motion.div>

        {/* Team Plan */}
        <motion.div
          className="glass-card p-10 rounded-xl flex flex-col h-full"
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="mb-8">
            <span className="bg-surface-container-highest text-on-surface px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              For Teams
            </span>
            <h3 className="font-headline-lg text-headline-lg text-white mt-4">Team</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-white">$19</span>
              <span className="text-on-surface-variant ml-2">/month</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Collaboration tools</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Shared workspace</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Priority support</span>
            </li>
            <li className="flex items-center gap-3">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <span className="text-on-surface-variant">Admin Controls</span>
            </li>
          </ul>

          <motion.button
            className="w-full py-4 border border-outline text-white rounded-full font-bold hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            Start Team
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Trust Section */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-outline mb-8">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale contrast-125">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="h-8 w-24 sm:w-28 md:w-32 bg-on-surface-variant/20 rounded-md"
              whileHover={{ scale: 1.05, opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
};

export default PricingPage;