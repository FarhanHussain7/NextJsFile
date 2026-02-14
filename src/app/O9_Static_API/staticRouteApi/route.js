import { user } from '@/app/util/db';
import { mongoURI } from '@/app/util/MongoConnection';
import { NextResponse } from 'next/server';
export const dynamic = "force-static";
import mongoose from 'mongoose';
import Product from '@/app/model/product';
import { getDatabaseConnection } from '@/app/lib/db-connection';

export async function GET() {
  try {
    // Use connection pool for faster API calls
    await getDatabaseConnection();

    // Fetch all products from MongoDB
    const products = await Product.find({});
    console.log(`📦 Found ${products.length} products in database`);

    return NextResponse.json({
      message: "Products fetched successfully",
      data: products,
      success: true,
      status: 200
    });

  } catch (error) {
    console.error("❌ Database Error:", error.message);
    return NextResponse.json({
      message: "Failed to fetch products",
      error: error.message,
      success: false,
      status: 500
    });
  }
}

export async function POST(request){
    try {
        // Use connection pool for faster API calls
        await getDatabaseConnection();

        let payload = await request.json();
        
        // Validate required fields
        if(!payload.name || !payload.email) {
            return NextResponse.json({
                result: "Missing required fields (name, email)",
                success: false,
                status: 400
            });
        }

        // Create new product using the model
        let productDoc = new Product({
            name: payload.name,
            email: payload.email,
            phone: payload.phone || "1234567890",
            address: payload.address || "Default Address"
        });

        // Save to MongoDB Atlas
        await productDoc.save();
        console.log(`✅ Product created: ${productDoc.name} (${productDoc.email})`);

        return NextResponse.json({
            message: "Product created successfully in MongoDB Atlas",
            data: {
                id: productDoc._id,
                name: productDoc.name,
                email: productDoc.email
            },
            success: true,
            status: 201
        });
        
    } catch (error) {
        console.error("❌ Database Error:", error.message);
        return NextResponse.json({
            message: "Database operation failed",
            error: error.message,
            success: false,
            status: 500
        });
    }
}

// PUT function for updating products
export async function PUT(request) {
    console.log("� PUT request received for updating product");
    
    try {
        // Connect to MongoDB Atlas
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB Atlas successfully");

        // Get the URL to extract product ID
        const url = new URL(request.url);
        const pathSegments = url.pathname.split('/');
        const productId = pathSegments[pathSegments.length - 1];
        
        console.log("🎯 Updating product ID:", productId);
        
        // Get form data
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        
        console.log("📥 Received update data:", { name, email, phone, address });
        
        // Validate required fields
        if (!name || !email || !productId) {
            return NextResponse.json({
                result: "Missing required fields (name, email, id)",
                success: false,
                status: 400
            });
        }

        // Update product in database
        const updateData = {
            name,
            email,
            phone: phone || "1234567890",
            address: address || "Default Address"
        };
        
        const result = await Product.updateOne(
            { _id: productId },
            { $set: updateData }
        );
        
        if (result.matchedCount === 0) {
            return NextResponse.json({
                result: "Product not found",
                success: false,
                status: 404
            });
        }
        
        console.log("✅ Product updated successfully");
        console.log("📋 Updated product:", {
            id: productId,
            ...updateData
        });
        
        return NextResponse.json({
            message: "Product updated successfully",
            data: {
                id: productId,
                ...updateData
            },
            success: true,
            status: 200
        });
        
    } catch (error) {
        console.error("❌ Update Error:", error.message);
        return NextResponse.json({
            message: "Failed to update product",
            error: error.message,
            success: false,
            status: 500
        });
    }
}

// DELETE function for deleting products
export async function DELETE(request) {
    console.log("🗑️ DELETE request received for deleting product");
    
    try {
        // Connect to MongoDB Atlas
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB Atlas successfully");

        // Get the URL to extract product ID
        const url = new URL(request.url);
        const pathSegments = url.pathname.split('/');
        const productId = pathSegments[pathSegments.length - 1];
        
        console.log("🎯 Deleting product ID:", productId);
        
        // Delete product from database
        const result = await Product.deleteOne({ _id: productId });
        
        if (result.deletedCount === 0) {
            return NextResponse.json({
                result: "Product not found",
                success: false,
                status: 404
            });
        }
        
        console.log("✅ Product deleted successfully");
        console.log("📋 Deleted product ID:", productId);
        
        return NextResponse.json({
            message: "Product deleted successfully",
            data: { id: productId },
            success: true,
            status: 200
        });
        
    } catch (error) {
        console.error("❌ Delete Error:", error.message);
        return NextResponse.json({
            message: "Failed to delete product",
            error: error.message,
            success: false,
            status: 500
        });
    }
}
