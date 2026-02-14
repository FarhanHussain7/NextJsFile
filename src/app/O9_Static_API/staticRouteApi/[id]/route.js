import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Product from "@/app/model/product";
import { mongoURI } from "@/app/util/MongoConnection";
import { getDatabaseConnection } from "@/app/lib/db-connection";

export async function GET(request, context) {
  try {
    // Use connection pool for faster API calls
    await getDatabaseConnection();

    // unwrap params properly
    const { params } = context;
    const { id } = await params;

    // Check if ID is valid ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { result: 'Invalid product ID format', success: false },
        { status: 400 }
      );
    }

    // Find product by ID in MongoDB
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { result: 'Product not found', success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });

  } catch (error) {
    console.error("❌ Database Error:", error.message);
    return NextResponse.json(
      { result: 'Database error', error: error.message, success: false },
      { status: 500 }
    );
  }
}

// Handle PUT request to update product data
export async function PUT(request, context) {
  try {
    // Use connection pool for faster API calls
    await getDatabaseConnection();

    // Extract id from params
    const { params } = context;
    const { id } = await params;

    // Check if ID is valid ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { result: "Invalid product ID format", success: false },
        { status: 400 }
      );
    }

    // Get form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { result: "Missing required fields (name, email)", success: false },
        { status: 400 }
      );
    }

    // Update product by id
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone: phone || "1234567890",
        address: address || "Default Address"
      },
      { new: true } // return updated document
    );

    if (!updatedProduct) {
      return NextResponse.json(
        { result: "Product not found", success: false },
        { status: 404 }
      );
    }

    console.log(`✅ Product updated: ${updatedProduct.name}`);
    return NextResponse.json(
      {
        message: `Product ${id} updated successfully`,
        data: updatedProduct,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Database Error:", error.message);
    return NextResponse.json(
      { message: "Database operation failed", error: error.message, success: false },
      { status: 500 }
    );
  }
}


export async function DELETE(request, context) {
  try {
    // Use connection pool for faster API calls
    await getDatabaseConnection();

    const { params } = context;
    const { id } = await params;

    // Check if ID is valid ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { result: "Invalid product ID format", success: false },
        { status: 400 }
      );
    }

    // Delete product from MongoDB
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { result: "Product not found", success: false },
        { status: 404 }
      );
    }

    console.log(`✅ Product deleted: ${deletedProduct.name}`);
    return NextResponse.json(
      { result: `Product ${id} deleted successfully`, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Database Error:", error.message);
    return NextResponse.json(
      { result: "Database error", error: error.message, success: false },
      { status: 500 }
    );
  }
}