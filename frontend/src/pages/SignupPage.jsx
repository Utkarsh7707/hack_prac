import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, loading } = useAuth();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await signup(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] flex items-center justify-center py-12 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] -z-10" />

      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Branding & Benefits */}
        <div className="hidden lg:block space-y-8">
          <div className="inline-flex items-center gap-3 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Join 10,000+ travelers</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Start your journey with <span className="text-blue-500">StayHub.</span>
          </h1>
          <ul className="space-y-6">
            {[
              { icon: "✨", title: "Exclusive Rates", text: "Save up to 15% on your first booking." },
              { icon: "🕒", title: "Instant Confirm", text: "No waiting. Get your voucher in seconds." },
              { icon: "🎁", title: "Loyalty Points", text: "Earn rewards for every night you stay." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-xl border border-slate-700">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Signup Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
            <p className="text-slate-500 mt-2">Fill in the details to get started.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-md text-sm flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email Address"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <div className="pt-2">
              <Button
                type="submit"
                loading={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
                disabled={loading}
              >
                Join StayHub
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-bold hover:text-blue-700 transition-colors">
                Sign in instead
              </Link>
            </p>
          </div>
          
          <p className="mt-6 text-center text-xs text-slate-400">
            By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};