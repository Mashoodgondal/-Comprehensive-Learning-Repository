"use client";
import { useState } from "react";

const Getvalue = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  // const changehandler = (e) => {
  //   setname(e.target.value);
  // };
  return (
    <div>
      <h1>Target values From inputs </h1>
      <div className="m-4 text-center ">
        <div className="m-4 flex flex-wrap item-center justify-center  space-x-4">
          <input
            className="border border-gray-600   rounded focuc:outline-blue-400"
            type="text"
            placeholder="Enter name"
            onChange={(e) => setname(e.target.value)}
          ></input>
          <input
            className="border border-gray-600 rounded focuc:outline-blue-400"
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <input
            className="border border-gray-600 rounded focuc:outline-blue-400"
            type="number"
            placeholder="Enter phone number"
            onChange={(e) => setphone(e.target.value)}
          ></input>
          <input
            className="border border-gray-600 rounded focuc:outline-blue-400"
            type="number"
            placeholder="Enter phone number"
            onChange={(e) => setphone(e.target.value)}
          ></input>
          <input
            className="border border-gray-600 rounded focuc:outline-blue-400"
            type="password"
            placeholder="Enter  password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
        </div>
        <div>
          <h2 className="mt-2mt-2 font-bolt text-gray-800">
            Enter Name:{name}
          </h2>
          <h2 className=" font-bolt text-gray-800">Enter Email:{email}</h2>
          <h2 className="mt-2 font-bolt text-gray-800">Enetr Phone:{phone}</h2>
          <h2 className="mt-2 font-bolt text-gray-800">Enetr Phone:{phone}</h2>
          <h2 className="mt-2 font-bolt text-gray-800">
            Enetr password:{password}
          </h2>
        </div>
      </div>
      <hr class="w-full h-0.5 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    </div>
  );
};

export default Getvalue;
