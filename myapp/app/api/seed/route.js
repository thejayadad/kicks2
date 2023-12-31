import Product from "../../../models/Product";
import db from "@/lib/db";



export async function POST(req) {
    await db.connect()

    try {
        const body = await req.json()
        const newProduct = await Product.create(body)

        return new Response(JSON.stringify(newProduct), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}