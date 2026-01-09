"use client"
// Nested page demonstrating useRouter for navigation
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>Nested Page</h1>
      <button onClick={() => router.push('/')}>Home Page</button>

      <Link href="/">Home Page </Link>
    </div>
  )
}