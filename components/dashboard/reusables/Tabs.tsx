import React from "react";

export default function Tabs({ defaultValue, className, tabs }) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs-list grid w-full grid-cols-2">
        {tabs.map((tab) => (
          <div key={tab.value} onClick={() => handleTabChange(tab.value)} className={`tab-trigger ${activeTab === tab.value ? "active" : ""}`}>
            {tab.icon && <span className="tab-icon">{tab.icon}</span>}
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          <div key={tab.value} className={`tab-panel ${activeTab === tab.value ? "active" : ""}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
