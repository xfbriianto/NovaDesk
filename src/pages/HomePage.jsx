import React from 'react';
import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } },
};

const HomePage = () => {
  return (
    <main className="relative pt-32 pb-24 min-h-screen overflow-hidden nebula-bg">
      {/* Background glow balls */}
      <motion.div
        className="nebula-glow top-[-100px] left-[-200px]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
      <motion.div
        className="nebula-glow bottom-[-100px] right-[-200px]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      />

      <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          className="flex flex-col items-start gap-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              No credit card required
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display-lg text-display-lg text-on-surface max-w-xl"
          >
            Work Smarter,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Not Harder
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body-md text-body-md text-on-surface-variant max-w-lg"
          >
            NovaDesk helps freelancers manage tasks, track time, and stay organized without losing
            their sanity. The ultimate glass-morphic productivity engine.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
            <motion.button
              className="bg-gradient-to-b from-[#7C3AED] to-[#8B5CF6] text-white px-8 py-4 rounded-xl font-bold primary-glow transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Get Started Free
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                arrow_forward
              </span>
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-xl font-bold border border-primary/30 text-primary hover:bg-primary/5 transition-all duration-300 glass-panel"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View Demo
            </motion.button>
          </motion.div>

          <motion.div variants={fadeIn} className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-variant"></div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary/20 flex items-center justify-center font-bold text-xs">
                +10k
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Trusted by 10,000+ freelancers
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="relative"
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          {/* Glowing orb */}
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-110"></div>

          {/* Main Card (overflow-hidden DIHAPUS agar widget bisa muncul ke luar) */}
          <div className="glass-panel rim-light rounded-[2rem] p-4 relative z-10">
            <img
              alt="NovaDesk Dashboard Preview"
              className="rounded-2xl w-full h-auto object-cover border border-white/5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCjK3P2VayejrldsfReAprQWGR9NBdjv_9uS5mw4J1KTNLOno4HVywWkUDdze2-iXCNUhhtmtT59QRmr5isjt_H_aVckLiMr_zZmoXHFHrPoc34mbr3Lq61zWLlHG9gI7vpr66j-G6BCkU-AAwoihLydBRb1ZpKJgg2aB8bDaqjmPwV52pDrOFWovmMLRHFQ7emf64597Cd8MeEWJ-8_HnR3nKhGlJs8ex-YHLM45gwHRKTmzhY5qajvEFswk4t4P6ETOvwlkfLg"
            />

            {/* Floating Widget – Efficiency */}
            <motion.div
              className="absolute -top-8 -right-8 glass-panel rim-light p-4 rounded-2xl w-48 shadow-2xl hidden md:block"
              initial={{ opacity: 0, y: -16, x: 16 }}
              animate={{ opacity: 1, y: [null, -7, 0], x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Efficiency
                  </span>
                  <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                </div>
                <div className="text-2xl font-bold text-on-surface">+24.8%</div>
                <div className="w-full bg-surface-variant h-1 rounded-full mt-2">
                  <div className="bg-primary w-3/4 h-full rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Widget – Focus Session */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass-panel rim-light p-4 rounded-2xl w-56 shadow-2xl hidden md:block"
              initial={{ opacity: 0, y: 16, x: -16 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">timer</span>
                  </div>
                  <div>
                    <div className="text-xs text-on-surface-variant">Focus Session</div>
                    <div className="text-lg font-bold text-on-surface tracking-mono">02:45:12</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;