'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Variants untuk animasi bertahap pada grid item
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const FeaturesPage = () => {
  return (
    <>
      {/* Main Content */}
      <motion.main
        className="relative pt-32 pb-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Effects */}
        <div className="nebula-glow top-[-100px] left-[-200px]"></div>
        <div className="nebula-glow bottom-[-100px] right-[-200px]"></div>

        <section className="max-w-container-max mx-auto px-margin-desktop">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
              POWERFUL CAPABILITIES
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 text-on-background">
              Features That Boost Your Productivity
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to stay organized, focused, and efficient in one clean workspace. Built for high-performance teams and focused individuals.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Task Management */}
            <motion.div
              className="glass-card p-8 rounded-xl flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Task Management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Organize your daily tasks easily. Drag, edit, complete with zero friction.
              </p>
              <div className="mt-auto pt-8">
                <motion.a
                  className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                  href="#"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Time Tracking */}
            <motion.div
              className="glass-card p-8 rounded-xl flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">timer</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Time Tracking</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Track work sessions and understand how you spend your productive hours.
              </p>
              <div className="mt-auto pt-8">
                <motion.a
                  className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                  href="#"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Notes System */}
            <motion.div
              className="glass-card p-8 rounded-xl flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">sticky_note_2</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Notes System</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Quick notes anytime. Auto-saved so you never lose your ideas.
              </p>
              <div className="mt-auto pt-8">
                <motion.a
                  className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                  href="#"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Workspace Dashboard */}
            <motion.div
              className="glass-card p-8 rounded-xl flex flex-col h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">dashboard</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Workspace Dashboard</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                All-in-one control panel with a clean overview of everything you need.
              </p>
              <div className="mt-auto pt-8">
                <motion.a
                  className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                  href="#"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Asymmetric Bento Showcase Section */}
          <motion.div
            className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="lg:col-span-2 glass-card p-10 rounded-2xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg mb-4">Deep Focus Engine</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                  Our algorithm identifies your peak performance times and automatically prioritizes critical work blocks.
                </p>
                <motion.button
                  className="bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded-full font-body-md hover:bg-primary hover:text-on-primary transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Explore Insights
                </motion.button>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-40 mix-blend-screen pointer-events-none">
                <img
                  alt="Futuristic digital visualization"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pA_F9XunuIN7KKW40aEY8BN3oZTjbRKbuD5yD7CpjIlS-IeTNQw6_M289nO3fKKIUEuGij2fowmgijB1thMQuhTTIhh0mkFnJtxOpnKJqu0h4lw1O133t4Ad0wHP50aRH31v7V3qdYxZZUzU7JDulNYS8qUeaS8CdZDaF6WyLMhS7R5HpbXw-Eswer23XFG2hFjw2CXwEkXV6j5oADHB2Lc4eQcXAYSLGfaNZKzS5hB5Qk7WRoGI5fm5dfGoMRB-hgOZOA_ITA"
                />
              </div>
            </div>
            <motion.div
              className="glass-card p-10 rounded-2xl bg-secondary-container/10 border-secondary/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">rocket_launch</span>
              <h3 className="font-headline-lg text-xl font-bold mb-4">Cloud Sync</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time collaboration across all your devices. Your workspace is always where you are.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </motion.main>

      {/* Stats Section */}
      <motion.section
        className="max-w-container-max mx-auto px-margin-desktop py-24 md:py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          {[
            { value: '10,000+', label: 'Active Users' },
            { value: '120K', label: 'Tasks Completed' },
            { value: '99.9%', label: 'Uptime' },
            { value: '4.8/5', label: 'User Rating' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 rounded-xl text-center flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="font-display-lg text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default FeaturesPage;