import { useState, useEffect } from "react";

export const useCounter = (initialValue: number) => {
  useEffect(() => setCounter(initialValue), [initialValue]);

  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (value: number = 1) => setCounter((prev) => prev + value);
  const decrement = (value: number = 1) => {
    if (counter <= 0) return;
    setCounter((prev) => prev - value);
  };
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
