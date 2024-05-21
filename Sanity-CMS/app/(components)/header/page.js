"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
const Hader = () => {
  const [nav, setnav] = useState(false);
  const handleNave = () => {
    setnav(!nav);
  };
  return (
    <div>
      <header class="text-gray-600 body-font bg-gray-100 m-3 rounded-md">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className=" hidden md:flex item-cemter justify-center font-bold ">
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  About{" "}
                </Link>
              </li>
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  Contect{" "}
                </Link>
              </li>
            </ul>
            <div>
              <GiHamburgerMenu
                className=" md:hidden cursor-pointer"
                onClick={handleNave}
              />
            </div>
          </nav>
        </div>
      </header>
      {/* << For Mobile>> */}
      <div className={`${nav ? " md:hidden w-full m-10" : "hidden"}`}>
        <div
          className={`${
            nav ? "w-[70%] sm:w-[60%] md:w-[65%] ease-in duration-5000" : ""
          }`}
        >
          <div className="flex item-center justify-between  border-b">
            <div>
              <h1>Logo </h1>
            </div>
            <div onClick={handleNave}>
              <RiCloseFill
                size={25}
                className="shadow-md rounded-md cursor-pointer"
              />
            </div>
          </div>
          <div>
            <ul className="flex flex-col space-y-3 m-6">
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  About{" "}
                </Link>
              </li>
              <li>
                <Link
                  rel="stylesheet"
                  href=""
                  class="mr-5 hover:text-blue-600 cursor-pointer"
                >
                  Contect{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hader;
// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RiCloseFill } from "react-icons/ri";

// const Hader = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div>
//       <header className="text-gray-600 body-font bg-gray-100 m-3 rounded-md">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">Tailblocks</span>
//           </a>
//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//             <ul className="hidden md:flex items-center justify-center font-bold">
//               <li className="mr-5 hover:text-blue-600 cursor-pointer">
//                 <Link href="/">Home</Link>
//               </li>
//               <li className="mr-5 hover:text-blue-600 cursor-pointer">
//                 <Link href="/services">Services</Link>
//               </li>
//               <li className="mr-5 hover:text-blue-600 cursor-pointer">
//                 <Link href="/about">About</Link>
//               </li>
//               <li className="mr-5 hover:text-blue-600 cursor-pointer">
//                 <Link href="/contact">Contact</Link>
//               </li>
//             </ul>
//             <div>
//               <GiHamburgerMenu
//                 className="md:hidden cursor-pointer"
//                 onClick={handleNav}
//               />
//             </div>
//           </nav>
//         </div>
//       </header>
//       {/* Mobile Navigation */}
//       <div className={`${nav ? "md:hidden w-full m-10" : "hidden"}`}>
//         <div
//           className={`${
//             nav ? "w-[70%] sm:w-[60%] md:w-[65%] ease-in duration-500" : ""
//           }`}
//         >
//           <div className="flex items-center justify-between border-b p-5">
//             <div>
//               <h1 className="text-xl font-bold">Logo</h1>
//             </div>
//             <div
//               onClick={handleNav}
//               className="shadow-md rounded-md cursor-pointer"
//             >
//               <RiCloseFill size={25} />
//             </div>
//           </div>
//           <div>
//             <ul className="flex flex-col space-y-3 m-6">
//               <li className="hover:text-blue-600 cursor-pointer">
//                 <Link href="/">Home</Link>
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer">
//                 <Link href="/services">Services</Link>
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer">
//                 <Link href="/about">About</Link>
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer">
//                 <Link href="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hader;
