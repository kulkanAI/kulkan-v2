'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

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
        <p className="text-sm text-gray-600 mb-6">
          Ground Your Gut. Build With Clarity.
        </p>
        <button
          onClick={() => router.push('/login')}
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-900 transition"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}