// Custtom hooks
import { CSSProperties, useRef } from "react";

// Custom hooks
import useDefineClassName from "./hooks/useDefineClassName";
import useManageTabs from "./hooks/useManageTabs";

// Styles
import "./index.scss";

interface TabsProps {
  tabs: Array<{ title: string; key: string }>;
  activeTab: string;
  styleText?: CSSProperties;
  styleTabLine?: CSSProperties;
  onChange: (key: string) => void;
}

function Tabs({
  tabs = [
    { title: "Sample1", key: "sample1" },
    { title: "Sampl2", key: "sample2" },
  ],
  activeTab = "sample1",
  styleText,
  styleTabLine,
  onChange,
}: TabsProps) {
  const activeIndicatorRef = useRef<HTMLDivElement>(null);
  const { defineClassName } = useDefineClassName();
  const { activeIndicatorStyle } = useManageTabs({
    activeTab,
    activeIndicatorRef,
  });

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
            style={{ ...styleText }}
            className={defineClassName(tab.key === activeTab)}
            role="button"
            aria-label="tab"
            onClick={() => onChange(tab.key)}
            key={tab.key}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tabs__line" style={{ ...styleTabLine }}>
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
