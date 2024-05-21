import React from "react";
import { Link } from 'react-router-dom';
import './comStyle.css';

function ProductOverview() {
  return (
    <div className="itemPage">
      <div className="items-1">
         <Link to="/snowboards">
          <button className="product-button">Snowboards</button>
        </Link>
      </div>
      <div className="items-2">
         <Link to="/boots">
          <button className="product-button">Boots</button>
        </Link>
      </div>
      <div className="items-3">
        <Link to="/clothes">
          <button className="product-button">Clothes</button>
        </Link>
      </div>
      <div className="items-4">
        <Link to="/bindings">
          <button className="product-button">Bindings</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductOverview;

