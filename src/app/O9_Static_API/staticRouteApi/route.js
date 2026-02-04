import {user} from '@/app/util/db';
import { NextResponse } from 'next/server';
export const dynamic = "force-static";



export function GET(){
    const data = user;
    return NextResponse.json(data,{result:"Static GET API working successfully"},{status:200})
}


export async function POST(request){
    let payload = await request.json();
    console.log("Name is ",payload.name, "Age is ", payload.age,"Email is ", payload.email);
    if(!payload.name || !payload.age || !payload.email ){
        return NextResponse.json({result:"No name found", success: false },{status:400})
    }
    return NextResponse.json({result:"Static POST API ", success : true},{status: 201})
}

