import { useState } from "react";

function useRate() {
  const [rate, setRate] = useState(0);

  function handleRate(value: number) {
    setRate(value);
  }

  return {
    rate,
    handleRate,
  };
}

export default useRate;
