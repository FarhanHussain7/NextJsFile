import { NextResponse } from "next/server";

export async function GET(request, content) {
    const { params } = content || {};
    const resolvedParams = params ? await params : {};
    const studentDetails = resolvedParams.allroutes;
    console.log('Resolved params:', studentDetails);
    return NextResponse.json({ result: studentDetails });
}