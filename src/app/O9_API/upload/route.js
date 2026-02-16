// app/api/upload/route.js
import { NextResponse } from 'next/server';
import fs from 'fs';

export const dynamic = "force-static";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded", success: false },
        { status: 400 }
      );
    }

    console.log(`📁 Received file: ${file.name} (${file.size} bytes)`);

    const fileContent = await file.arrayBuffer();
    const buffer = Buffer.from(fileContent);

    const path = `./public/${file.name}`;
    await fs.promises.writeFile(path, buffer);

    console.log(`✅ File saved to: ${path}`);

    return NextResponse.json(
      { message: `File ${file.name} uploaded successfully`, success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Error:", error.message);
    return NextResponse.json(
      { message: "File operation failed", error: error.message, success: false },
      { status: 500 }
    );
  }
}