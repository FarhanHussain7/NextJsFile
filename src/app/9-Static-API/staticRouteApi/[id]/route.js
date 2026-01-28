import { user } from '@/app/util/db';
import { Exo } from 'next/font/google';
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
      : { result: userData[0], success: true },
    { status: 200 }
  );
}



export async function PUT(request, content){
  let payload = await request.json;
  
}