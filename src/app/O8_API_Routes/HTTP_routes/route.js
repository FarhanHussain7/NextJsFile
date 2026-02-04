import { NextResponse } from "next/server";
export const dynamic = "force-static";

export function GET(request){
    return NextResponse.json({name:"Farhan Hussain", age:25, city:"Noida"},{status:200},{message:"API working successfully"})
}

// C:\Users\HP\New folder\NextJsTopic\learningnextjs\src\app\O9_Static_API\staticRouteApi