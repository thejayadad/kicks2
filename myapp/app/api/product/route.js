import Product from "@/models/Product";
import db from "@/lib/db";

export async function GET(req) {
    await db.connect()

    try {
        const products = await Product.find({})
        return new Response(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}