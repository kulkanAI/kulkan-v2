'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        data: { full_name: fullName },
      },
    });

    setLoading(false);
    if (!error) {
      setSubmitted(true);
    } else {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-xl px-8 py-10 max-w-md w-full text-center">
        <Image
          src="/assets/Kulkan-Grey-over-Green-Logo-960x1270.svg"
          alt="Kulkan Logo"
          width={120}
          height={40}
          className="mx-auto mb-4 object-contain max-h-[40px]"
        />
        <h2 className="text-xl font-semibold mb-1">Welcome</h2>
        <p className="text-sm text-gray-600 mb-6">Ground Your Gut. Build With Clarity.</p>

        {submitted ? (
          <p className="text-green-600 font-medium">
            ✉️ Magic link sent! Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded text-sm"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white w-full py-2 rounded hover:bg-gray-900 transition"
            >
              {loading ? 'Sending...' : 'Sign Up'}
            </button>
          </form>
        )}

        <p className="text-xs text-gray-400 mt-6">
          By clicking "Sign Up", you agree to Kulkan's{' '}
          <a href="#" className="underline">User Agreement</a> and{' '}
          <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </div>
    </main>
  );
}