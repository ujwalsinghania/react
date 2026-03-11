import React, { useState } from "react";

// 1. A Custom Hook acting as a headless component
function useAccordion(initialIndex = -1) {
  const [openIndex, setOpenIndex] = useState(initialIndex);

  // Expose state and state setters for external components
  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const isOpen = (index) => openIndex === index;

  return { toggleIndex, isOpen };
}

function StandardAccordion() {
  const { toggleIndex, isOpen } = useAccordion();

  const items = [
    { title: "Section 1", content: "This is the content for section 1." },
    { title: "Section 2", content: "This is the content for section 2." },
    { title: "Section 3", content: "This is the content for section 3." },
  ];

  return (
    <div className="accordion-container">
      <h3 className="section-title">Standard UI using Headless Logic</h3>
      <div className="accordion-list">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-button"
              onClick={() => toggleIndex(index)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon">
                {isOpen(index) ? "[-]" : "[+]"}
              </span>
            </button>

            {isOpen(index) && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TabsUI() {
  const { toggleIndex, isOpen } = useAccordion(0); // Default open first tab

  const items = [
    { title: "Tab 1", content: "This is content specifically for Tab 1." },
    { title: "Tab 2", content: "This is content specifically for Tab 2." },
    { title: "Tab 3", content: "This is content specifically for Tab 3." },
  ];

  return (
    <div className="tabs-container">
      <h3 className="section-title">
        Alternative Tabs UI using the SAME Headless Logic
      </h3>
      <div className="tabs-header">
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab-button ${isOpen(index) ? "active" : ""}`}
            onClick={() => toggleIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="tabs-body">
        {items.map((item, index) =>
          isOpen(index) ? (
            <div key={index} className="tab-pane">
              {item.content}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}

// 4. Overall Usage
export default function HeadlessUIExample() {
  return (
    <div className="headless-examples">
      <StandardAccordion />
      <TabsUI />
    </div>
  );
}
