"use client";
import { useState, useEffect } from "react";

const FechApi = () => {
  const [products, setproducts] = useState([]);
  const [loader, setloader] = useState(true);
  const fetchitems = async () => {
    let products = await fetch("https://fakestoreapi.com/products");
    products = await products.json();
    setproducts(products);
    console.log(products);
    setloader(false);
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
      {/* <button
        onClick={fetchitems}
        className="bg-gray-400 p-1 rounded-md hover:bg-gray-300 m-4"
      >
        fetch items
      </button> */}
      {products.length ? (
        <div>
          <table className="border-collapse border border-gray-400 mt-10">
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
                  <td className="border border-gray-400 p-2">
                    {product.title}
                  </td>
                  <td className="border border-gray-400 p-2">
                    {product.price}
                  </td>
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
        </div>
      ) : loader ? (
        <div className="flex  justify-center mt-6">
          <div role="status ">
            <svg
              aria-hidden="true"
              class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div> No Data Found</div>
      )}
    </div>
  );
};

export default FechApi;
{
  /* <div className="flex  justify-center mt-6">
<div role="status ">
  <svg
    aria-hidden="true"
    class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
  <span class="sr-only">Loading...</span>
</div>
</div> */
}
