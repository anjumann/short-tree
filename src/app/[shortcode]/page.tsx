import { PrismaClient } from "@prisma/client"
import { redirect } from 'next/navigation'

const prisma = new PrismaClient()
const page = async ({ params }: { params: { shortcode: string } }) => {

    const { shortcode } = params

    const result = await prisma.url.findUnique({
        where: {
            shortCode: shortcode
        }
    })

    if (result) {
        const url = result.url
        
    }
    return (
        <div>page</div>
    )
}

export default page