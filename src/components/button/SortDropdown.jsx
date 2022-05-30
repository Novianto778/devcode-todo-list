import React, { useState } from "react";

const SortDropdown = ({ selected, setSelected, isActive }) => {
  // const [selected, setSelected] = useState("latest");

  const options = [
    { title: "terbaru", value: "latest" },
    { title: "terlama", value: "oldest" },
    { title: "A-Z", value: "az" },
    { title: "Z-A", value: "za" },
    { title: "belum selesai", value: "unfinished" },
  ];

  const handleDropdown = (option) => {
    setSelected(option);
  };
  return (
    <div className={`dropdown sort-dropdown ${!isActive && "hide"}`}>
      <div className="dropdown-content">
        {options.map((option) => (
          <div className="dropdown-item" data-cy="sort-selection">
            <div
              key={option.value}
              className="item-label"
              onClick={() => handleDropdown(option.value)}
              data-cy={`${
                selected === option.value ? "sort-selection-selected" : "false"
              }`}
            >
              <span
                className={`sort-option sort-${option.value}`}
                data-cy="sort-selection-icon"
              ></span>
              <span
                className="priority-item-title"
                data-cy="sort-selection-title"
              >
                {option.title}
              </span>
              {selected === option.value && (
                <span className="check-icon"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
