import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetail = async () => {
      const productId = window.location.pathname.split('/').pop();

      if (productId) {
        try {
          const res = await fetch(`http://localhost:8080/products/id?id=${productId}`);
          if (!res.ok) throw new Error('Network response was not ok');
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          console.error('There was a problem with the fetch operation:', err);
        }
      }
    };
    fetchProductDetail();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {product.id && (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex w-full max-w-screen-lg">
          <div className="w-1/2 pr-8">
            <img className="w-full h-auto rounded-lg shadow-md" src={`https://api.predic8.de${product.image_link}`} alt={product.name} />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Product Name: {product.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Price: {product.price}</p>
            <span className="text-green-600 text-lg font-semibold">Vendor:</span>
            <ul>
              {product.vendors.map((vendor, index) => (
                <li key={index} className="text-gray-700 leading-relaxed mb-4">
                  Vendor: {vendor.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;


