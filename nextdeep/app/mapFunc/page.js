"use client";
import { useState } from "react";
const MapFunc = () => {
  const [arr, setarr] = useState([
    { Name: "Ali", RollNo: "32", Section: "A" },
    { Name: "Asger", RollNo: "33", Section: "C" },
    { Name: "Fezan", RollNo: "34", Section: "M" },
    { Name: "Mashood", RollNo: "22", Section: "B" },
    { Name: "Ans", RollNo: "12", Section: "D" },
  ]);
  const deleteHandler = (StudentRollNo) => {
    const restStudent = arr.filter((item) => item.RollNo !== StudentRollNo);
    setarr(restStudent);
  };
  return (
    <div className="flex justify-center bg-gray-50 overflow-auto">
      <table class="table-auto mt-16 border-collapse border border-gray-400  shadoe-lg">
        <thead>
          <tr class="text-center bg-gray-200">
            <th class="px-4 py-2">Student Name</th>
            <th class="px-4 py-2">Roll No</th>
            <th class="px-4 py-2">Section</th>
            <th class="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => {
            return (
              <tr key={index} class="text-center">
                <td class="border px-4 py-2">{item.Name}</td>
                <td class="border px-4 py-2">{item.RollNo}</td>
                <td class="border px-4 py-2">{item.Section}</td>
                <td class="border px-4 py-2">
                  <button
                    class="bg-red-200 hover:bg-red-400 text-gray-700 font-bold py-2 px-4 rounded"
                    // onclick={() => deleteHandler(item.RollNo)}
                    onClick={() => deleteHandler(item.RollNo)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MapFunc;
