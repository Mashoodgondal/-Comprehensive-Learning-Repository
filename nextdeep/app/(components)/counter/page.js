import { useState } from "react";

const Counter = () => {
  const [count, Setcount] = useState(0);

  const increment = () => {
    Setcount(count + 1);
  };
  const decrement = () => {
    Setcount(count - 1);
  };
  const remove = () => {
    Setcount(count * 0);
  };
  return <div>Counter App</div>;
};

export default Counter;
