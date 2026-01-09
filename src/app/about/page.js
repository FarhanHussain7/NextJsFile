'use client';
// About page with dynamic stats and theme toggle
// Routing is a part of this page with links to nested routes
// Routing in nextjs is done using Link component from next/link
// This page also demonstrates useState and useEffect hooks for dynamic behavior

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
    const [stats, setStats] = useState({ views: 0, likes: 0 });
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Simulate loading stats
        setStats({ views: 1234, likes: 567 });
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'}`}>
            <h1 className="text-4xl font-bold mb-6">About Page</h1>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <p className="text-2xl font-bold">{stats.views}</p>
                    <p>Page Views</p>
                </div>
                <div className="p-4 bg-pink-500 text-white rounded-lg">
                    <p className="text-2xl font-bold">{stats.likes}</p>
                    <p>Likes</p>
                </div>
            </div>

            <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>

            <Link href="/about/aboutCollage">Go to About Collage</Link>
            <Link href="/about/aboutStudent">Go to About Student</Link>
        </div>
    );
}