// src/pages/TestimonialsPage.jsx
import React from 'react';

const TestimonialsPage = () => {
  return (
    <main className="relative pt-32 pb-24 px-4 md:px-10 max-w-[1440px] mx-auto min-h-screen">
      {/* Background Glow Orbs */}
      <div className="orb w-[400px] h-[400px] bg-[#7C3AED] top-[-100px] left-[-100px]"></div>
      <div className="orb w-[500px] h-[500px] bg-[#4C1D95] bottom-[-200px] right-[-100px]"></div>
      <div className="orb w-[300px] h-[300px] bg-[#A855F7] top-[20%]" style={{ left: '60%' }}></div>

      {/* Header Content */}
      <header className="relative z-10 text-center mb-16 space-y-4">
        <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
          What Users Say
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          Real feedback from freelancers using NovaDesk every day.
        </p>
      </header>

      {/* Testimonials Grid */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="glass-card testimonial-card p-8 rounded-xl flex flex-col justify-between group">
          <div className="space-y-6">
            <div className="flex gap-1 text-primary">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              "aku jadi lebih teratur walaupun masih males kerja."
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary to-tertiary">
              <img
                alt="User One"
                className="w-full h-full rounded-full object-cover border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJXw_rJiIzidckMVJsB23wtt3yF6q5IQxHkuk9XpqbrFXHO7czFCLWOr8b7ur5xDY5yGtKpbl9UgW0IiE75zJL7DlEcvJW1YzzKkdCYj1TFXOqtOvLhvAmjeQiZebMJqC_XXkaemwjLS59NQjvsCCs_H1VsHwmTy-Vh2poaMD0mWtL_JEGMapKaC2IYLikS_ap1VzEB6cHftnRvnBxxxtc0T0zUgrAq353iooaRGksbvc8xrWgw7fFcycnPyQFUjtiJUrPTu7dxw"
              />
            </div>
            <div>
              <h4 className="font-body-md text-body-md font-bold text-on-surface">User One</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Freelancer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="glass-card testimonial-card p-8 rounded-xl flex flex-col justify-between group">
          <div className="space-y-6">
            <div className="flex gap-1 text-primary">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              "UI-nya clean banget, bikin gue ngerasa produktif padahal enggak."
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary to-tertiary">
              <img
                alt="User Two"
                className="w-full h-full rounded-full object-cover border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCngo43Ss05zhh1ySXamvwW7C3FXTwf5F3ADawJLdJ87r0RDS_3xzwrdMCVuYtcv9k3T6hZguBqG243BmGtrMqQh3rB2ksrAEvsgyqjKqZ1yUJ_wl3dtcJ0ROXA-JQpYP_AB_V9h37prCw4RiIvRHZDURrTYfO3QL5EpmTP-jvsoDsjhuopIVHHmBRZtkPXHbzPylrSsVvdzze9UFSzE498WWAebLC3qiDgIiOEZk8pkCVOtFsere-DqE_m_scBEfJ5On_VNDtDiw"
              />
            </div>
            <div>
              <h4 className="font-body-md text-body-md font-bold text-on-surface">User Two</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Designer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="glass-card testimonial-card p-8 rounded-xl flex flex-col justify-between group">
          <div className="space-y-6">
            <div className="flex gap-1 text-primary">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              "Simple tapi enak dipakai, gak ribet."
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-primary to-tertiary">
              <img
                alt="User Three"
                className="w-full h-full rounded-full object-cover border-2 border-surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaSZYNfo1jcSa6b9kMKndpEjmXp7WQGe8gdjEKm9vm_0dZtM3uGlD5KjJF8W-ncO60GYqlqvuXOac1fIZk7uqKK3ElbpuAL9ltzBERSy9VAkcizHykPEndF3SxB3x5L5STFe2rDkoXw2-NQwYMttnebCsntTD6bD7qR7v_F2ExqFsBufdBkCwQPQd-g1qGKaZmA4YPYfgRkmN8TJHrNiNZHmyZUNN4UJxY_5O5wgRbDK1GEO0Wzxr-z5y0HSqND4ueqAwroafbDg"
              />
            </div>
            <div>
              <h4 className="font-body-md text-body-md font-bold text-on-surface">User Three</h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="mt-32 relative z-10 glass-card p-10 rounded-xl flex flex-col md:flex-row items-center gap-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent"></div>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Ready to be organized (even if you're lazy)?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Join thousands of freelancers who prioritize clarity over complexity. Experience the NovaDesk difference today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all">
              Join Now
            </button>
            <button className="border border-primary text-primary font-bold px-8 py-3 rounded-xl hover:bg-primary/10 transition-colors">
              View Features
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <img
              alt="NovaDesk UI"
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-Jj36pdnWI2iKlc5xGO-QHScKEILtflSLvjXL1SsYO6AmQEQitgIGCn5aArOVK0duR9j8BpZAD6jktlygiwpikzbPq6-uJ63foE14DaCqFXjD2nPbUr9Fn2A9Nd-wa6LeKgQqHeFC7Y1hI6js39L6OiUm5quFldjS2ntDo0gbhD2HX4IdMis6sqB9A27RhlWpTLTJzOOutG4nzgobO3-6D_E3qyZwqUOTMrdE2x7Gvfj1M4l7_3AMyBN3M2Qz9Xz-jB2baDAtA"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;