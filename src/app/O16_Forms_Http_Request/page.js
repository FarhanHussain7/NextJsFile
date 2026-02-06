import Link from "next/link";

export default function FormPage(){
    return(
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Form and HTTP Request</h1>
                <p className="text-gray-600 mb-6 text-center">This page demonstrates how to create a form and make an HTTP request in Next.js.</p>
                {/* Form component will go here */}
            </div>

            <Link href="/O16_Forms_Http_Request/O1_Post" className="block mt-6 text-center text-blue-600 hover:underline">
                Go to Post API Form
            </Link>
            
        </div>
    )
}
