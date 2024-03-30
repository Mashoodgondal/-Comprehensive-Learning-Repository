"use client";
import { useState, useEffect } from "react";

const FechApi = () => {
  const [products, setproducts] = useState([]);
  const fetchitems = async () => {
    let products = await fetch("https://fakestoreapi.com/products");
    products = await products.json();
    setproducts(products);
    console.log(products);
  };
  useEffect(() => {
    fetchitems();
  }, []);
  return (
    <div className="m-6 p-4 text-center">
      <h1 className="text-3xl text-indigo-600 text-center font-bold">
        Fech Data From API
      </h1>
      {/* <button
        onClick={fetchitems}
        className="bg-gray-400 p-1 rounded-md hover:bg-gray-300 m-4"
      >
        fetch items
      </button> */}
      {products && (
        <table className="border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">id</th>
              <th className="border border-gray-400 p-2">img</th>
              <th className="border border-gray-400 p-2">title</th>
              <th className="border border-gray-400 p-2">price</th>
              <th className="border border-gray-400 p-2">category</th>
              <th className="border border-gray-400 p-2">description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-400 p-2">{product.id}</td>
                <td className="border border-gray-400 p-2">
                  <img src={product.image} width={40} alt="" />
                </td>
                <td className="border border-gray-400 p-2">{product.title}</td>
                <td className="border border-gray-400 p-2">{product.price}</td>
                <td className="border border-gray-400 p-2">
                  {product.category}
                </td>
                <td className="border border-gray-400 p-2">
                  {product.description.slice(0, 20)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FechApi;
