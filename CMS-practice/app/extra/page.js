import React from "react";

const Extra = () => {
  return (
    <div>
      <h1 className="mt-2 text-center font-bold text-indigo-600 text-[25px]">
        This is an extra work for practice
      </h1>
      <div className="p-4 m-4 grid grid-cols-1 md:grid-cols-2 space-x-2 sm:space-y-2 md:space-y-0">
        <div className="border border-gray-200 bg-gray-300">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            tempora aliquam facilis quo non, at ipsam explicabo natus! Quod
            neque culpa distinctio qui cupiditate{" "}
          </p>
        </div>
        <div className="border border-gray-200">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            tempora aliquam facilis quo non, at ipsam explicabo natus! Quod
            neque culpa distinctio qui cupiditate{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extra;
