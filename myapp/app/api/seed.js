import Product from "../../../models/Product";
import data from "@/lib/data";
import db from "@/lib/db";

// const handler = async(req, res) => {
//     await db.connect()
//     await Product.deleteMany()
//     await Product.insertMany(data.products)
//     await db.disconnect()
//     res.status(200).json({msg: 'seeded successfully'})
// }

// export default handler

export async function Post(req){
    await db.connect()
    await Product.insertMany()
    await Product.insertMany(data.products)
    return new Response(JSON.stringify("Its added"), { status: 201 })

}