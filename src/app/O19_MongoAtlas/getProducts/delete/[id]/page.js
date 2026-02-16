"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DeleteProduct({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  
  // Unwrap params Promise in Next.js 15+
  const unwrappedParams = use(params);

  useEffect(() => {
    fetchProduct();
  }, [unwrappedParams.id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/O9_Static_API/staticRouteApi/${unwrappedParams.id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.error("Failed to fetch product:", err);
      setError('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch(`http://localhost:3000/O9_Static_API/staticRouteApi/${unwrappedParams.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSuccess('Product deleted successfully!');
      
      // Redirect back to products list after 2 seconds
      setTimeout(() => {
        router.push('/O19_MongoAtlas/getProducts');
      }, 2000);
      
    } catch (err) {
      console.error("Failed to delete product:", err);
      setError('Failed to delete product');
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Delete Product</h1>
          <div className="text-center text-gray-500">
            Loading product data...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Delete Product</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        {product ? (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">
                ⚠️ Are you sure you want to delete this product?
              </h2>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Name:</span>
                  <span className="text-gray-900">{product.name || 'N/A'}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Email:</span>
                  <span className="text-gray-900">{product.email || 'N/A'}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Phone:</span>
                  <span className="text-gray-900">{product.phone || 'N/A'}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-700 w-24">Address:</span>
                  <span className="text-gray-900">{product.address || 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">
                <strong>Warning:</strong> This action cannot be undone. The product will be permanently deleted from the database.
              </p>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:bg-red-300"
              >
                {deleting ? 'Deleting...' : 'Delete Product'}
              </button>
              
              <Link 
                href="/O19_MongoAtlas/getProducts" 
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Product not found
          </div>
        )}
      </div>
    </div>
  );
}
