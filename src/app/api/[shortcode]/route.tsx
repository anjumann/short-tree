import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { shortcode: string } }) {

    const { shortcode } = params

    return NextResponse.json({ shortcode: shortcode })
}