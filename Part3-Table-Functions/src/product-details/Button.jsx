import React from "react";

const Button = ({ sortOrder, sortData, column }) => {
  return (
    <span className="button-container">
      <button onClick={() => sortData(column)}>
        {sortOrder === "ASC" ? (
          <span className="arrow-down" />
        ) : sortOrder === "DSC" ? (
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
