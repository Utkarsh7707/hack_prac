import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return;
    }

    try {
      await login(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] flex flex-col justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo/Brand */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
             <span className="text-white text-2xl font-bold">SH</span>
          </div>
        </div>
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-white">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-slate-400">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[440px]">
        <div className="bg-white/95 backdrop-blur-md py-10 px-8 shadow-2xl rounded-2xl border border-white/20">
          
          {/* Error Alert with Animation (if you have framer-motion) */}
          {error && (
            <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-xl border-slate-200 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <Link to="/forgot-password" size="sm" className="text-xs font-semibold text-blue-600 hover:text-blue-500">
                  Forgot?
                </Link>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-xl border-slate-200 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded transition-all"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                Remember this device
              </label>
            </div>

            <Button
              type="submit"
              loading={loading}
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg shadow-slate-900/10 transition-all active:scale-[0.98]"
              disabled={loading}
            >
              Sign In to StayHub
            </Button>
          </form>

          {/* Social Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="px-2 bg-white text-slate-400 tracking-wider font-medium">New Here?</span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              to="/signup"
              className="w-full flex justify-center py-3.5 px-4 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all"
            >
              Create a free account
            </Link>
          </div>
        </div>

        {/* Support Link */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Trouble logging in? <a href="#" className="font-semibold text-slate-400 hover:text-white transition-colors">Contact Support</a>
        </p>
      </div>
    </div>
  );
};