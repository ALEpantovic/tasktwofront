import Image from 'next/image';
import { useEffect, useState } from 'react';
import Product from './Components/Product';

export default function Home() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await fetch('http://localhost:8080/products');
          if (!res.ok) throw new Error('Network response was not ok');
          const rawData = await res.text();
          const jsonData = JSON.parse(rawData.replace("All Products:", ""));
          setProducts(jsonData.products);
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        }
      };
      fetchProducts();
    }, []);

  return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-6">
          <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 min-h-full">
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
  );
}
