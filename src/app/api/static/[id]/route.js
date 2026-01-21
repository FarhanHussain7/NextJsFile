import { user } from '@/app/util/db';
import { NextResponse } from 'next/server';

export async function generateStaticParams() {
  return user.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function GET(request, context) {
  // ✅ unwrap params properly
  const { params } = context;
  const { id } = await params;   // <-- this is the missing await

  const userData = user.filter((item) => item.id === parseInt(id));

  return NextResponse.json(
    userData.length === 0
      ? { result: 'No Data found', success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}