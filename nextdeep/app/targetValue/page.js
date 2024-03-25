"use client";
import { useState } from "react";

const Getvalue = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  // const changehandler = (e) => {
  //   setname(e.target.value);
  // };
  return (
    <div>
      <div className="m-4 text-center ">
        <input
          className="border border-gray-600 rounded focuc:outline-blue-400"
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
        <h2 className="mt-2mt-2 font-bolt text-gray-500">Enter Name:{name}</h2>
        <h2 className=" font-bolt text-gray-500">Enter Email:{email}</h2>
        <h2 className="mt-2 font-bolt text-gray-500">Enetr Phone:{phone}</h2>
      </div>
    </div>
  );
};

export default Getvalue;
