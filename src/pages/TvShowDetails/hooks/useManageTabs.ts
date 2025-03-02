import { useState } from "react";

function useManageTabs() {
  const [activeTab, setActiveTab] = useState("general");

  function handleChangeTab(tab: string) {
    setActiveTab(tab);
  }

  return {
    activeTab,
    handleChangeTab,
  };
}

export default useManageTabs;
