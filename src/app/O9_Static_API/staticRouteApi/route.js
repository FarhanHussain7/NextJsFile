import { user } from '@/app/util/db';
import { mongoURI } from '@/app/util/MongoConnection';
import { NextResponse } from 'next/server';
export const dynamic = "force-static";
import mongoose from 'mongoose';
import Product from '@/app/model/product'; // ✅ import your model


export function GET(){
    const data = user;
    return NextResponse.json(data,{result:"Static GET API working successfully"},{status:200})
}


// export async function POST(request){
//     let payload = await request.json();
//     console.log("Name is ",payload.name, "Age is ", payload.age,"Email is ", payload.email);
//     if(!payload.name || !payload.age || !payload.email ){
//         return NextResponse.json({result:"No name found", success: false },{status:400})
//     }
//     return NextResponse.json({result:"Static POST API ", success : true},{status: 201})
// }


export async function POST(request) {
    console.log("POST request received at static API route");

    // ✅ Correct variable name (mongoURI, not MongoURI)
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB Atlas successfully");

    let productDoc = new Product({
        name: "Test Product",
        email: "test@example.com",
        phone: "1234567890",
        address: "123 Test St, Test City"
    });

    await productDoc.save();

    console.log("Product saved to MongoDB Atlas successfully");

    return NextResponse.json(
        { message: "Product added successfully" },
        { status: 201 }
    );
}
