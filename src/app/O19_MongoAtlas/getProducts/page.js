import Link from "next/link";

const getData = async () => {
  try {
    let result = await fetch('http://localhost:3000/O9_Static_API/staticRouteApi');
    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }
    result = await result.json();
    if (result && result.data) {
      console.log("Products fetched successfully");
      return result.data;
    } else {
      console.error("No data field in response");
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};


export default async function getProducts(){
    const products = await getData();
    return(
        <div>
            <h1>List of Products </h1>
            
          
            <table border="1" className="text-black table-auto border-collapse border border-slate-500 w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-600 p-2">Name</th>
                        <th className="border border-slate-600 p-2">Email</th>
                        <th className="border border-slate-600 p-2">Phone</th>
                        <th className="border border-slate-600 p-2">Address</th>
                        <th className="border border-slate-600 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      products.map((item) => (
                            <tr key={item._id}>
                                <td className="border border-slate-600 p-2">{item.name}</td>    
                                <td className="border border-slate-600 p-2">{item.email}</td>
                                <td className="border border-slate-600 p-2">{item.phone}</td>
                                <td className="border border-slate-600 p-2">{item.address}</td>
                                <td className="border border-slate-600 p-2">
                                  <Link href={`/O19_MongoAtlas/getProducts/update/${item._id}`} className="text-white bg-blue-500 border-2 border-black p-1 m-1 rounded hover:bg-blue-600 transition-colors">Update</Link>
                                  <Link href={`/O19_MongoAtlas/getProducts/delete/${item._id}`} className="text-white bg-red-500 border-2 border-black p-1 m-1 rounded hover:bg-red-600 transition-colors">Delete</Link> 
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
              <Link href="/O19_MongoAtlas" className="text-white bg-amber-50 border-2 border-black p-2 m-2 rounded-2xl hover:bg-amber-100 transition-colors">Back</Link>
        </div>
    )
}