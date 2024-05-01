"use client";

// import Head from "next/head";

// export default function Hometm() {
//   return (
//     <div>
//       <div className="flex h-screen justify-center items-center bg-blue-100">
//         <div className="p-10 rounded-lg bg-white shadow-lg">
//           <div
//             id="timeDisplay"
//             className="text-center text-2xl font-bold text-gray-800"
//           >
//             Current Time: {new Date().toLocaleTimeString()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

export default function Hometm() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timerId); // This will clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="flex h-screen justify-center items-center bg-blue-100">
      <div className="p-10 rounded-lg bg-white shadow-lg">
        <div
          id="timeDisplay"
          className="text-center text-2xl font-bold text-gray-800"
        >
          Current Time: {currentTime}
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const serverTime = new Date().toLocaleTimeString();
//   return {
//     props: { serverTime },
//   };
// }
// export async function getServerSideProps() {
//   const serverTime = new Date().toLocaleTimeString();
//   return {
//     props: { serverTime },
//   };
// }
