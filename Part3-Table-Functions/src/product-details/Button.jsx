import React from "react";

const Button = ({ sortOrder, sortData, column, columnClicked }) => {
  return (
    <span className="button-container">
      <button onClick={() => sortData(column)}>
        {columnClicked === column && sortOrder === "ASC" ? (
          <span className="arrow-down" />
        ) : columnClicked === column && sortOrder === "DSC" ? (
          <span className="arrow-up" />
        ) : (
          <div className="arrow-container">
            <span className="arrow-up" />
            <span className="arrow-down" />
          </div>
        )}
      </button>
    </span>
  );
};

export default Button;
