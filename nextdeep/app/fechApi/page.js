"use client";
import { useState } from "react";

const FechApi = () => {
  const [products, setproducts] = useState([]);
  const fetchitems = async () => {
    let products = await fetch("https://fakestoreapi.com/products");
    products = await products.json();
    setproducts(products);
    console.log(products);
  };
  return (
    <div className="m-6 p-4">
      <h1 className="text-3xl text-indigo-600 text-center font-bold">
        Fech Data From API
      </h1>
      <button onClick={fetchitems}>fetch items</button>
      <table>
        <tr>
          <th>id</th>
          <th>img</th>
          <th>title</th>
          <th>price</th>
          <th>category</th>
          <th> description</th>
        </tr>
        {products.map((product) => {
          return (
            <tr>
              <td>{product.id}</td>
              <td>
                <img src={product.image} width={40} alt="" />
              </td>
              <td>{product.title}</td>
              <td> {product.price} </td>
              <td> {product.category} </td>
              <td> {product.description.slice(0, 20)} </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default FechApi;

// import { useState } from "react";

// const FechApi = () => {
//   const [products, setProducts] = useState([]);

//   const fetchItems = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const productsData = await response.json();
//       setProducts(productsData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="m-6 p-4">
//       <h1 className="text-3xl text-indigo-600 text-center font-bold">
//         Fetch Data From API
//       </h1>
//       <button onClick={fetchItems}>Fetch Items</button>

//       <table>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>img</th>
//             <th>title</th>
//             <th>price</th>
//             <th>category</th>
//             <th>description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>
//                 <img src={product.image} width={40} alt="" />
//               </td>
//               <td>{product.title}</td>
//               <td>{product.price}</td>
//               <td>{product.category}</td>
//               <td>{product.description.slice(0, 20)}...</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FechApi;
