"use client"

export default function UploadFile() {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Selected file:", file);
        // You can add code here to upload the file to a server or process it as needed
    }; 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Upload a File</h1>  
            <input
                type="file"
                onChange={handleFileChange}
                className="border border-gray-300 p-2 rounded"
            />
        </div>
    );
}
    
