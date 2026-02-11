import Link from "next/link";

export default function MongoAtlas() {
    return(
        <div className="flex justify-center items-center">
            <h1>Mongo Atlas</h1>

            <Link href="/O19_MongoAtlas/addProduct" className="text-white bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl">Add Product</Link>
            <Link href="/O19_MongoAtlas/getProducts" className="text-white bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl">Get Products</Link>
            <Link href="/O19_MongoAtlas/updateProduct" className="text-blue-600 bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl">Update Product</Link>
            <Link href="/O19_MongoAtlas/deleteProduct" className="text-blue-600 bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl">Delete Product</Link>
        </div>
    )
}
