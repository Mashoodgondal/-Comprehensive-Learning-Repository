import React from "react";

const Hader = () => {
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
            <a class="mr-5 hover:text-blue-600 cursor-pointer">First Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">Second Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">Third Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">Fourth Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">Fifth Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">sixth Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">seventh Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">seventh Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">seventh Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">seventh Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">seventh Link</a>
            <a class="mr-5 hover:text-blue-600 cursor-pointer">seventh Link</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Hader;
