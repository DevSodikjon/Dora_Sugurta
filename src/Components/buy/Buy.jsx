import React from "react";
import { useState, useEffect } from "react";

import data from "../../assets/data/products.json";
import { Link } from "react-router-dom";

const Buy = () => {
  console.log(data);
  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <Link className=" text-red-900" to={"/buyin2"}>
        Next
      </Link>
    </div>
  );
};

export default Buy;
