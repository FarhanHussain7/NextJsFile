export default function InterviewQuestion() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-green-100 via-yellow-100 to-red-100">           
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl text-center">    
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
                🎯 Common Interview Question
            </h1>
            <p className="text-gray-700 text-lg mb-4">
                <strong>Question:</strong> What is the difference between <code>var</code>, <code>let</code>, and <code>const</code> in JavaScript?     
            </p>
            <p className="text-gray-700 text-lg mb-4">
                <strong>Answer:</strong>
                <ul className="list-disc list-inside text-left">    
                    <li><code>var</code>: Function-scoped, can be redeclared and updated, hoisted with undefined.</li>
                    <li><code>let</code>: Block-scoped, cannot be redeclared but can be updated, hoisted but not initialized.</li>
                    <li><code>const</code>: Block-scoped, cannot be redeclared or updated, hoisted but not initialized.</li>
                </ul>
            </p>    

            <p className="text-gray-700 text-lg">
                Understanding these differences is crucial for writing clean and bug-free JavaScript code, especially in modern development where <code>let</code> and <code>const</code> are preferred for their block-scoping and immutability features.
            </p>
        </div>
    </div>
  );
}   