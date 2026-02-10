import { user } from '@/app/util/db';
import { mongoURI } from '@/app/util/MongoConnection';
import { NextResponse } from 'next/server';
export const dynamic = "force-static";
import mongoose from 'mongoose';
import Product from '@/app/model/product';

export function GET(){
    const data = user;
    return NextResponse.json(data,{result:"Static GET API working successfully"},{status:200})
}

export async function POST(request){
    console.log("📦 POST request received for MongoDB Atlas");
    
    try {
        // Connect to MongoDB Atlas
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB Atlas successfully");

        let payload = await request.json();
        console.log("📥 Received data:", payload);
        
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
        console.log("✅ Product saved to MongoDB Atlas successfully");
        console.log("📋 Product details:", {
            id: productDoc._id,
            name: productDoc.name,
            email: productDoc.email,
            collection: 'products',
            database: 'ProductDB'
        });

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
        console.error("❌ MongoDB Atlas Error:", error.message);
        return NextResponse.json({
            message: "Database operation failed",
            error: error.message,
            success: false,
            status: 500
        });
    }
}
