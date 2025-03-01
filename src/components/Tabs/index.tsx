// Custtom hooks
import { useRef } from "react";
import useDefineClassName from "./hooks/useDefineClassName";
import useManageTabs from "./hooks/useManageTabs";

// Styles
import "./index.scss";

interface TabsProps {
  tabs: Array<{ title: string; key: string }>;
  activeTab: string;
  onChange: (key: string) => void;
}

function Tabs({
  tabs = [
    { title: "Sample1", key: "sample1" },
    { title: "Sampl2", key: "sample2" },
  ],
  activeTab = "sample1",
  onChange = () => {},
}: TabsProps) {
  const activeIndicatorRef = useRef<HTMLDivElement>(null);
  const { defineClassName } = useDefineClassName();
  const { activeIndicatorStyle } = useManageTabs({
    activeTab,
    activeIndicatorRef,
  });

  console.log(activeIndicatorStyle);
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map((tab) => (
          <li
            id={
              activeTab === tab.key
                ? `tabs-${tab.key}-selected`
                : `tabs-${tab.key}`
            }
            className={defineClassName(tab.key === activeTab)}
            role="button"
            onClick={() => onChange(tab.key)}
            key={tab.key}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tabs__line">
        <div
          ref={activeIndicatorRef}
          className="tabs__active-indicator"
          style={{ ...activeIndicatorStyle }}
        />
      </div>
    </div>
  );
}

export default Tabs;
