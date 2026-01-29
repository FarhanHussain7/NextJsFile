import {user} from '@/app/util/db';
import { NextResponse } from 'next/server';
export const dynamic = "force-static";



export function GET(){
    const data = user;
    return NextResponse.json(data,{status:200})
}

// export function GET(content){
//     const Userdata = user.filter((item)=> item.id === parseInt(content.params.id));
//     return NextResponse.json(Userdata,{status:200})
// }

export async function POST(request){
    let payload = await request.json();
    console.log("Name is ",payload.name, "Age is ", payload.age,"Email is ", payload.email);
    if(!payload.name || !payload.age || !payload.email ){
        return NextResponse.json({result:"No name found", success: false },{status:400})
    }
    return NextResponse.json({result:"Static POST API ", success : true},{status: 201})
}

export async function PUT(request,content){
    let payload = await request.json();
    let userId = content.params.id;
    console.log("User ID to be updated ", userId);    
    console.log("Name is ",payload.name, "Age is ", payload.age,"Email is ", payload.email);
    if(!payload.name || !payload.age || !payload.email ){
        return NextResponse.json({result:"No name found", success: false },{status:400})
    }
    return NextResponse.json({result:"Static PUT API ", success : true},{status: 201})  
}