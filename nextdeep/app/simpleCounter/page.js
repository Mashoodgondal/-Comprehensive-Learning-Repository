"use client";
import { useState } from "react";
const Counting = () => {
  const [count, Setcount] = useState(0);

  const increment = () => {
    Setcount(count + 1);
  };
  const decrement = () => {
    if (count >= 1) {
      Setcount(count - 1);
    }
  };

  const remove = () => {
    Setcount(0);
  };
  return (
    <div>
      <h1 className="m-5 text-5xl text-center text-indigo-500">Counter App</h1>
      <h2 className="mt-5 text-green-600 font-bold text-center text-3xl">
        count: {count}
      </h2>
      <div className="m-5 flex ml-[220px] text-center mt-10 space-x-5">
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
            onClick={increment}
          >
            Add
          </button>
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
            onClick={decrement}
          >
            Sub
          </button>
        </div>

        <div>
          {count > 0 && (
            <button
              class="bg-red-600 hover:bg-red-700  text-white font-bold py-2 px-4 rounded"
              onClick={remove}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counting;
