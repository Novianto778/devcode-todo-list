import React, { useState } from "react";

const Dropdown = ({ selected, setSelected, OPTIONS }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = (option) => {
    setSelected(option);
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        data-cy="modal-add-priority-dropdown"
        onClick={(e) => setIsActive((prev) => !prev)}
      >
        <div className="item-label">
          <span className={`priority-icon ${selected.value}`}></span>
          <span className="priority-item-title">{selected.title}</span>
        </div>
        <span className="chevron-down-icon"></span>
      </div>

      {isActive && (
        <div className={`dropdown-content`}>
          {OPTIONS.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleDropdown(option)}
              data-cy="modal-add-priority-item"
            >
              <span className={`priority-icon ${option.value}`}></span>
              <span className="priority-item-title">{option.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
