import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { generateShortUUID } from '@/lib/functions'

const prisma = new PrismaClient()

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (email) {
    const results = await prisma.users.findMany({
      where: {
        email: email
      },
      include: {
        urls: true
      }
    })

    return NextResponse.json(results || "no user found")
  }

}


// nhasjk;dgfhnouahnws


export async function POST(request: Request) {

  const { email, url } = await request.json() as { email: string, url: string }
  const shortCode = generateShortUUID()
  try {

    const result = await prisma.url.create({
      data: {
        shortCode,
        url,
        Users: {
          connectOrCreate: {
            where: { email },
            create: { email }
          }
        }
      }
    })

    console.log(result)
    return NextResponse.json({ result })
  } catch (error) {
    return NextResponse.json({ errorMessage: error })
  }
}

