import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Navbar Overlay - Optional if you have a separate header */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a192f] py-24 sm:py-32">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-500 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-indigo-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-400 uppercase bg-blue-400/10 rounded-full ring-1 ring-inset ring-blue-400/20">
            Now booking in over 120 countries
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Find Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Perfect Stay</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience luxury and comfort at the best prices. Verified reviews and 24/7 support for your peace of mind.
          </p>
          
          {!isAuthenticated && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all">
                View All Hotels
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 relative z-10">
        
        {/* Welcome / Dashboard Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8 md:p-12">
          {isAuthenticated ? (
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900">
                  Welcome back, {user?.name?.split(' ')[0]}! ✨
                </h2>
                <p className="mt-2 text-slate-500">
                  You have <span className="font-semibold text-blue-600">3 upcoming trips</span> this month.
                </p>
              </div>
              <button className="whitespace-nowrap px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition shadow-lg">
                Manage My Bookings
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                  Join a community of <br />world travelers.
                </h2>
                <p className="text-slate-500 mb-6">
                  Create an account to unlock "Member-Only" pricing and save up to 20% on your first booking.
                </p>
                <div className="flex gap-4">
                  <a href="/signup" className="text-blue-600 font-bold hover:underline">Create an account &rarr;</a>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-24 h-24 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">🏨</div>
                  <div className="w-24 h-24 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl">🌴</div>
                  <div className="w-24 h-24 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl">✈️</div>
                  <div className="w-24 h-24 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl">🥂</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Value Propositions */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">The StayHub Edge</h2>
            <p className="text-3xl font-bold text-slate-900">Why travelers trust us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: "🛡️", title: "Premium Security", desc: "Enterprise-grade encryption for every transaction." },
              { icon: "⭐", title: "Verified Reviews", desc: "Real feedback from travelers who actually stayed there." },
              { icon: "🏷️", title: "Price Match", desc: "Find a lower price elsewhere? We'll match it instantly." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer / CTA */}
      <footer className="bg-slate-900 py-12 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} StayHub Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};