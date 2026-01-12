// app/topics/page.js
// Topics page with links to login for routing demonstration
import Link from "next/link";

export default function LecturePage({ params }) {
  const { lecture } = params;
  return (
    <div>
      <h1>Lecture Page</h1>
      <details>
        <summary>Routing</summary>
        <Link href="/login" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Login Page</Link>
       <Link href="/about">Routing (about)</Link>
      <Link href="/login">Routing (login)</Link>
      </details>

      <details>
        <summary>Nested Routing</summary>
           <Link href="/about/aboutCollage">Go to About Collage</Link>
            <Link href="/about/aboutStudent">Go to About Student</Link>
        
      </details>
      <details>
        <summary>API Calls</summary>
        <Link href="/api/ClientApi" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">API Call (Client)</Link>
        <Link href="/api/serverApi" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">API Call (Server)</Link>
      </details>
      <details>
        <summary>Style</summary>
        <Link href="/Style/Global-Inline-hook" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Global-inline-hook style</Link>
        <Link href="/Style/Module_File" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">module Style</Link>
        <Link href="/Style/conditional_style" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">conditional Style</Link>
        <Link href="/Style/Fonts" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Fonts Style</Link>
        <Link href="/Style/MetaData" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">MetaData Style</Link>
      </details>
      
      <details>
        <summary>Image</summary>
        <Link href="/Images" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Import Image </Link>
        
      </details>

      <details>
        <summary>Script</summary>
        <Link href="/script" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Load location (script)</Link>
      </details>

      <details>
        <summary>Loader API</summary>
        <Link href="/api/loader" className="border-4 bg-sky-400 text-white mt-5 p-2 w-60 rounded-3xl">Loader API Page</Link>
        <Link href="/Static_Site_Generation">Static Site </Link>
        <Link href="/Static_Site_Generation/userdId">Static Site </Link>
      </details>
    </div>
  );
}