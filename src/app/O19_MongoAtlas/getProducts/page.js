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
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}