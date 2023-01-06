import { useState } from 'react';

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue.minValue || 0);

  const increaseBy = (value) => {
    let newCounter = Math.max(counter + value, initialValue.minValue || 0);
    if (initialValue.maxValue) {
      newCounter = Math.min(newCounter, initialValue.maxValue);
    }
    setCounter(newCounter);
  };

  return {
    counter,
    increaseBy,
  };
};
