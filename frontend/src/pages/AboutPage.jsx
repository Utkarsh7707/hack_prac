import React from 'react';

export const AboutPage = () => {
  const features = [
    {
      icon: '🔒',
      title: 'Secure Booking',
      description: 'Industry-leading encryption and secure payment gateways ensure your personal and financial information is always protected.',
    },
    {
      icon: '⭐',
      title: 'Verified Reviews',
      description: 'Read honest reviews from real guests who have stayed at your chosen hotel. Only verified bookings can leave reviews.',
    },
    {
      icon: '💰',
      title: 'Best Price Guarantee',
      description: 'Find the lowest prices on the web. If you find a lower rate elsewhere, we'll match it plus give you an extra discount.',
    },
    {
      icon: '🌍',
      title: '120+ Countries',
      description: 'Explore millions of properties across the globe, from boutique hotels to worldwide chains, all in one place.',
    },
    {
      icon: '📱',
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock to help with bookings, cancellations, and any questions.',
    },
    {
      icon: '🎁',
      title: 'Exclusive Deals',
      description: 'Get access to member-only rates and flash sales. Earn points on every booking and redeem for future stays.',
    },
    {
      icon: '🏆',
      title: 'Quality Assured',
      description: 'Every hotel is carefully vetted and rated. We maintain the highest standards for your comfort and satisfaction.',
    },
    {
      icon: '⚡',
      title: 'Instant Confirmation',
      description: 'Receive instant booking confirmation via email and SMS. Manage your reservations anytime, anywhere.',
    },
  ];

  const stats = [
    { number: '500K+', label: 'Hotels Worldwide' },
    { number: '50M+', label: 'Happy Guests' },
    { number: '120+', label: 'Countries' },
    { number: '7/24', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 sm:py-32">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-indigo-400 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            About StayHub
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Revolutionizing hotel booking with transparency, security, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              StayHub is committed to making hotel booking easy, affordable, and transparent. We believe everyone deserves access to quality accommodations at fair prices, backed by genuine reviews and reliable support.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our platform eliminates the middleman, offering direct deals from hotels worldwide while maintaining the highest standards of security and customer satisfaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="text-5xl font-bold mb-2">Why Choose Us?</div>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Verified reviews from real guests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Best price guarantee across the web</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Instant booking confirmation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-t border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Features</h2>
          <p className="text-xl text-slate-600">
            Everything you need for a seamless hotel booking experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Book Your Next Adventure?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join millions of travelers who trust StayHub for their hotel bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              Get Started
            </a>
            <a
              href="/"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Browse Hotels
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
