"use client";
// import { useState } from "react";
// const MapFunc = () => {
//   const [arr, setarr] = useState([
//     { Name: "Ali", RollNo: "32", Section: "A" },
//     { Name: "Asger", RollNo: "33", Section: "C" },
//     { Name: "Fezan", RollNo: "34", Section: "M" },
//   ]);
//   const deleteHandler = (StudentRollNo) => {
//     let restStudent = arr.filter((item) => {
//       if (item.RollNo !== StudentRollNo) {
//         return arr;
//       }
//     });
//     setarr([restStudent]);
//     // arr.shift();
//     console.log(arr);
//   };
//   return (
//     <div>
//       <div className=" ml-[450px]">
//         <table>
//           <tr className="text-center">
//             <th>StudentName</th>
//             <th>RollNo</th>
//             <th>Section</th>
//           </tr>
//           <tbody>{arr.map((item, index) => {
//             return (
//               <tr key={index}>
//                 <td>{item.Name}</td>
//                 <td>{item.RollNo}</td>
//                 <td>{item.Section}</td>
//                 <td>
//                   <button
//                     className="bg-gray-300 rounded-md hover:bg-gray-400"
//                     onClick={() => deleteHandler(item.RollNo)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}</tbody>

//         </table>
//       </div>
//     </div>
//   );
// };

// export default MapFunc;

import React, { useState } from "react";

const MapFunc = () => {
  const [students, setStudents] = useState([
    { Name: "Ali", RollNo: "32", Section: "A" },
    { Name: "Asger", RollNo: "33", Section: "C" },
    { Name: "Fezan", RollNo: "34", Section: "M" },
  ]);

  const deleteHandler = (StudentRollNo) => {
    const updatedStudents = students.filter(
      (student) => student.RollNo !== StudentRollNo
    );
    setStudents(updatedStudents);
  };

  return (
    <div>
      <div className="ml-[450px]">
        <table>
          <thead>
            <tr className="text-center">
              <th>Student Name</th>
              <th>Roll No</th>
              <th>Section</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.Name}</td>
                <td>{student.RollNo}</td>
                <td>{student.Section}</td>
                <td>
                  <button
                    className="bg-gray-300 rounded-md hover:bg-gray-400"
                    onClick={() => deleteHandler(student.RollNo)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapFunc;
