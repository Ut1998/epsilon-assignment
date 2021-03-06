import React, { useState } from "react";

import "./ProductDetails.css";

import product from "../product-details.json";
import Button from "./Button";

const ProductDetails = () => {
  const productDetails = product.cookies;
  const [products, setProducts] = useState(productDetails);
  const [sortOrder, setSortOrder] = useState("");
  const [columnClicked, setColumnClicked] = useState("");

  const sortData = (column) => {
    const initialValues = [...products];
    if (sortOrder === "") {
      const sortedData = initialValues.sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setProducts(sortedData);
      setSortOrder("ASC");
      setColumnClicked(column);
    } else if (sortOrder === "ASC") {
      const sortedData = initialValues.sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setProducts(sortedData);
      setSortOrder("DSC");
      setColumnClicked(column);
    } else {
      setProducts(productDetails);
      setSortOrder("");
      setColumnClicked(column);
    }
  };

  return (
    <div className="table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th id="name">
              Product Name{" "}
              <Button
                sortData={sortData}
                sortOrder={sortOrder}
                column="name"
                columnClicked={columnClicked}
              />
            </th>
            <th id="price">
              Price{" "}
              <Button
                sortData={sortData}
                sortOrder={sortOrder}
                column="price"
              />
            </th>
            <th className="category">
              Category{" "}
              <Button
                sortData={sortData}
                sortOrder={sortOrder}
                column="category"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="category">{product.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
