// Home page
import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Stay 🏨
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            Discover and book from thousands of hotels worldwide. Best deals, verified reviews, and instant confirmation.
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isAuthenticated ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome back, {user?.name}! 👋
            </h2>
            <p className="text-gray-600 mb-8">
              Ready to book your next adventure? Explore our collection of amazing hotels.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Browse Hotels (Coming Soon)
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to explore? 🌍
            </h2>
            <p className="text-gray-600 mb-8">
              Sign up or login to start booking your dream hotels today!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Login
              </a>
              <a
                href="/signup"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose StayHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Booking</h3>
              <p className="text-gray-600">
                Your payments are safe and encrypted with industry-standard security.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Reviews</h3>
              <p className="text-gray-600">
                Read verified reviews from real guests to make the best choice.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Great Deals</h3>
              <p className="text-gray-600">
                Find the best prices with exclusive discounts and special offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
