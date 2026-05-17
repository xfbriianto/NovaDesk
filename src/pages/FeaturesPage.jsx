import React from 'react';

const FeaturesPage = () => {
  return (
    <>
      {/* Main Content */}
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="nebula-glow top-[-100px] left-[-200px]"></div>
        <div className="nebula-glow bottom-[-100px] right-[-200px]"></div>

        <section className="max-w-container-max mx-auto px-margin-desktop">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-sm text-label-sm mb-6">
              POWERFUL CAPABILITIES
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 text-on-background">
              Features That Boost Your Productivity
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to stay organized, focused, and efficient in one clean workspace. Built for high-performance teams and focused individuals.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Task Management */}
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Task Management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Organize your daily tasks easily. Drag, edit, complete with zero friction.
              </p>
              <div className="mt-auto pt-8">
                <a className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Time Tracking */}
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">timer</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Time Tracking</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Track work sessions and understand how you spend your productive hours.
              </p>
              <div className="mt-auto pt-8">
                <a className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Notes System */}
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">sticky_note_2</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Notes System</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Quick notes anytime. Auto-saved so you never lose your ideas.
              </p>
              <div className="mt-auto pt-8">
                <a className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Workspace Dashboard */}
            <div className="glass-card p-8 rounded-xl flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <span className="material-symbols-outlined text-primary text-3xl">dashboard</span>
              </div>
              <h3 className="font-headline-lg text-xl font-bold mb-4 text-on-background">Workspace Dashboard</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                All-in-one control panel with a clean overview of everything you need.
              </p>
              <div className="mt-auto pt-8">
                <a className="text-primary font-label-sm text-label-sm flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
                  LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Asymmetric Bento Showcase Section */}
          <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-card p-10 rounded-2xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg mb-4">Deep Focus Engine</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                  Our algorithm identifies your peak performance times and automatically prioritizes critical work blocks.
                </p>
                <button className="bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded-full font-body-md hover:bg-primary hover:text-on-primary transition-all">
                  Explore Insights
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-40 mix-blend-screen pointer-events-none">
                <img
                  alt="Futuristic digital visualization"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pA_F9XunuIN7KKW40aEY8BN3oZTjbRKbuD5yD7CpjIlS-IeTNQw6_M289nO3fKKIUEuGij2fowmgijB1thMQuhTTIhh0mkFnJtxOpnKJqu0h4lw1O133t4Ad0wHP50aRH31v7V3qdYxZZUzU7JDulNYS8qUeaS8CdZDaF6WyLMhS7R5HpbXw-Eswer23XFG2hFjw2CXwEkXV6j5oADHB2Lc4eQcXAYSLGfaNZKzS5hB5Qk7WRoGI5fm5dfGoMRB-hgOZOA_ITA"
                />
              </div>
            </div>
            <div className="glass-card p-10 rounded-2xl bg-secondary-container/10 border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">rocket_launch</span>
              <h3 className="font-headline-lg text-xl font-bold mb-4">Cloud Sync</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time collaboration across all your devices. Your workspace is always where you are.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Stats Section */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-24 md:py-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="glass-card p-8 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="font-display-lg text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Active Users</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="font-display-lg text-4xl font-bold text-primary mb-2">120K</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Tasks Completed</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="font-display-lg text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">Uptime</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center flex flex-col items-center justify-center">
            <div className="font-display-lg text-4xl font-bold text-primary mb-2">4.8/5</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-medium">User Rating</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;