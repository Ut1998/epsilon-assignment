import React, { useState } from "react";

import "./ProductDetails.css";

import product from "../product-details.json";
import Button from "./Button";

const ProductDetails = () => {
  const productDetails = product.cookies;
  const [products, setProducts] = useState(productDetails);
  const [sortOrder, setSortOrder] = useState("");

  const sortData = (column) => {
    const initialValues = [...products];
    if (sortOrder === "") {
      const sortedData = initialValues.sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setProducts(sortedData);
      setSortOrder("ASC");
    } else if (sortOrder === "ASC") {
      const sortedData = initialValues.sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setProducts(sortedData);
      setSortOrder("DSC");
    } else {
      setProducts(productDetails);
      setSortOrder("");
    }
  };

  return (
    <div className="table-container">
      <table className="products-table">
        <thead>
          <tr>
            <th id="name">
              Product Name <Button sortData={sortData} sortOrder={sortOrder} />
            </th>
            <th onClick={() => sortData("price")} id="price">
              Price <Button />
            </th>
            <th className="category">
              Category <Button />
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
