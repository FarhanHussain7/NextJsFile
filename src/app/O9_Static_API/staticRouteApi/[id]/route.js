import { user } from '@/app/util/db';
import { Exo } from 'next/font/google';
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "@/app/model/product";
import { mongoURI } from "@/app/util/MongoConnection";


export async function generateStaticParams() {
  return user.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function GET(request, context) {
  // unwrap params properly
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

// Handle PUT request to update user data
export async function PUT(request, { params }) {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(mongoURI);

    // Extract id from params
    const { id } = params;

    // Parse request body
    const payload = await request.json();

    // Validate required fields
    if (!payload.name || !payload.email || !payload.phone || !payload.address) {
      return NextResponse.json(
        { result: "Missing fields", success: false },
        { status: 400 }
      );
    }

    // Update product by id
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        address: payload.address,
      },
      { new: true } // return updated document
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { result: "Product not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: `Product ${id} updated successfully`,
        data: updatedProduct,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Database operation failed", error: error.message, success: false },
      { status: 500 }
    );
  }
}


export async function DELETE(request, context) {
  const { params } = context;
  const { id } = await params; 
  return NextResponse.json(
    { result: `User ${id} deleted successfully`, success: true },
    { status: 200 }
  );
}