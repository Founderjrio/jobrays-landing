'use client';
import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const trimmedEmail = email.trim();

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ||
        'http://localhost:8000';
      const res = await fetch(`${baseUrl}/waitlist/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || '✅ You’re on the list!');
        setEmail('');
      } else {
        setMessage(
          data?.detail?.[0]?.msg ||
            data?.message ||
            '❌ Something went wrong.'
        );
      }
    } catch (err) {
      setMessage('🚨 Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full max-w-xl mx-auto"
    >
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 w-full sm:w-auto rounded-md border border-gray-300 text-black"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-white text-black px-6 py-2 rounded-xl border border-yellow-200 shadow-md shadow-yellow-100 hover:bg-yellow-50 transition-all duration-200 disabled:opacity-50"
      >
        {loading ? 'Joining...' : 'Join Waitlist'}
      </button>
      {message && (
        <p className="text-sm mt-2 text-center sm:text-left text-black">
          {message}
        </p>
      )}
    </form>
  );
}
