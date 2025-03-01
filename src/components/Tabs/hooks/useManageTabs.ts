import { useState, useEffect } from "react";

function useManageTabs({
  activeTab,
  activeIndicatorRef,
}: {
  activeTab: string;
  activeIndicatorRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [styleSelectedTab, setStyleSelectedTab] = useState({});

  useEffect(() => {
    function defineTabSelectedStyle() {
      const selectedTab = document.getElementById(`tabs-${activeTab}-selected`);
      const activeIndicator = activeIndicatorRef.current;
      const activeIndicatorParent = activeIndicator?.parentElement;

      if (selectedTab && activeIndicator && activeIndicatorParent) {
        const marginLeft =
          selectedTab.offsetLeft - activeIndicatorParent.offsetLeft;
        const { width = 0 } = selectedTab.getBoundingClientRect();
        const style = {
          width: `${width + 6}px`,
          left: `${marginLeft}px`,
        };

        setStyleSelectedTab(style);
      }
    }

    defineTabSelectedStyle();
    window.addEventListener("resize", defineTabSelectedStyle);

    return () => {
      window.removeEventListener("resize", defineTabSelectedStyle);
    };
  }, [activeTab, activeIndicatorRef]);

  return { activeIndicatorStyle: styleSelectedTab };
}

export default useManageTabs;
