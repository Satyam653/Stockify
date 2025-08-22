import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { useContext }  from "react";
import React from "react";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);
  const handleBuyClick = async () => {
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    }).then(res => {
    console.log(res.data); // should log "Order saved!"
    })
    .catch(err => {
      if (err.response) {
      // Server responded with error
      console.error("❌ Error Response:", err.response.data);
      console.error("Status:", err.response.status);
    } else if (err.request) {
      // Request made but no response
      console.error("❌ No Response:", err.request);
    } else {
      // Something else
      console.error("❌ Error:", err.message);
    }
    });

     closeBuyWindow();
  };

  const handleCancelClick = () => {
     closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BuyActionWindow;