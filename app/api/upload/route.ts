// creating a nextjs route

import { NextResponse } from "next/server";
// instance of cloudinary
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dpubtkbwd', 
    api_key: '945187397165548', 
    api_secret: 'PrMGcEeBd1a1GsBI6kJgw9Rk_FM' 
});

export async function POST(request: Request) {

    const { path } = await request.json();

    if(!path) {
        return NextResponse.json(
            { message: 'Image path is required' }
            { status: 400 }
        )
    }

    try {
        const options = {
            use_filename: true,
            unique_filename: false,
            overwritte: true,
            transformation: [{ width: 1000, heigth: 752, crop: 'scale' }]
        }
    } catch (error) {
        
    }
}