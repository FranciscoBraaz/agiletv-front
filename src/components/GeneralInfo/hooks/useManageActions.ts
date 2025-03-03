import { useState } from "react";
import { toast } from "react-toastify";

function useManageActions() {
  const [rate, setRate] = useState(0);
  const [addedToList, setAddedToList] = useState(false);

  function handleRate(value: number) {
    setRate(value);
  }

  function handleAddToList() {
    setAddedToList((prev) => !prev);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    toast.info("Link copiado para a área de transferência");
  }

  return {
    rate,
    addedToList,
    handleRate,
    handleAddToList,
    copyToClipboard,
  };
}

export default useManageActions;
