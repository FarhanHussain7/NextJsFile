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

            <p className="text-gray-500 text-sm mt-6">
                Question : Nextjs is Front-end Framework or Full-stack Framework ?
                Anser : Next.js is a React-based framework that can be used for both front-end and full-stack development. It provides features for server-side rendering, static site generation, and API routes, making it versatile for various types of applications.        
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : What is the difference between getStaticProps and getServerSideProps in Next.js ?
                Anser : <code>getStaticProps</code> is used for static site generation (SSG) and runs at build time, while <code>getServerSideProps</code> is used for server-side rendering (SSR) and runs on every request. <code>getStaticProps</code> is ideal for pages that can be pre-rendered, while <code>getServerSideProps</code> is suitable for pages that require dynamic data fetching on each request.  
                </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Can we create Database in Next.js ?
                Anser : Next.js itself does not provide built-in database functionality, but you can easily integrate it with any database of your choice (e.g., MongoDB, PostgreSQL, MySQL) using server-side code in API routes or getServerSideProps. You can also use ORM libraries like Prisma or Sequelize to manage your database interactions within a Next.js application.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : What is server component?
                Anser : Server components in Next.js are React components that run on the server and are not sent to the client. They are useful for fetching data, handling authentication, and performing server-side operations. Server components are defined by default in the `app` directory and can be used to improve performance and security by keeping sensitive logic on the server.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : What is cleint component?
                Anser : Client components in Next.js are React components that run on the client side (browser). They can include interactive elements, state management, and lifecycle methods. Client components are typically used for user interfaces and interactions that require dynamic behavior. In Next.js, you can specify a component as a client component by using the `use client` directive at the top of the file.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Feature in Next.js over React ?
                Anser : Next.js provides several features over React, including built-in routing, API routes, server-side rendering (SSR), static site generation (SSG), automatic code splitting, and optimized performance through features like image optimization and automatic prefetching.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Routing type in Next.js ?
                Anser : Next.js uses file-based routing, where the structure of the `pages` directory determines the routes of the application. Each file in the `pages` directory corresponds to a route, and dynamic routes can be created using square brackets (e.g., `[id].js` for dynamic parameters).
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Where we should use React or  Next.js ?
                Anser : Use React when you need a lightweight, flexible library for building user interfaces. Use Next.js when you want a full-featured framework that includes routing, server-side rendering, API routes, and other built-in features for building scalable web applications.
            </p>
            
            <p className="text-gray-500 text-sm mt-4">
                Question : Can we use Redux  ?
                Anser : Yes, you can use Redux with Next.js. Redux is a state management library that can be integrated into Next.js applications to manage global state. You can use libraries like `@reduxjs/toolkit` and `react-redux` to set up Redux in a Next.js project.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Default component in Next.js ?
                Anser : server component 
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : How to make client Component ?
                Anser : To make a client component in Next.js, you need to add the `use client` directive at the top of the component file. This tells Next.js that the component should be rendered on the client side (in the browser) rather than on the server.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Can we use event in Server component in Next.js ?
                Anser : No, you cannot use events in server components in Next.js because server components are rendered on the server and do not support client-side interactivity. Events are only supported in client components.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : What is Middleware ?
                Anser : Middleware in Next.js is a function that runs before a request is processed. It allows you to modify the request or response objects, perform authentication checks, or redirect users based on certain conditions. Middleware is defined in a file named `middleware.js` in the root of your project.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Use of Enviroment variables ?
                Anser : Environment variables in Next.js are used to store sensitive data like API keys, database URLs, and other configuration values that should not be exposed in the client-side code. They are defined in a `.env.local` file and accessed using `process.env.VARIABLE_NAME`.
            </p>
            <p className="text-gray-500 text-sm mt-4">
                Question : Why server component better for SEO ?
                Anser : Server components in Next.js are rendered on the server and can generate static HTML content, which is more SEO-friendly. This allows search engines to crawl and index the content more effectively compared to client-side rendered components.
            </p>
            
            
        </div>
    </div>
  );
}   