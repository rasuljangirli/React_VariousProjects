import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "../css/currency.css";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_5HNbg9ozWvn5xVD2MYFrjVh8JvMwojKG8rUkHxUZ";

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(3);
    setResult(result);
  };

  return (
    <div>
      <div className="currency-main">
        <div
          style={{
            backgroundColor: "#5E5D5D",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontFamily: "arial", color: "#fff" }}>
            Exchange Currency
          </h3>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            id="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            className="amount-input"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="first-currency-option"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
          <FaArrowRight style={{ marginRight: "10px" }} />

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="second-currency-option"
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <input
            type="text"
            value={result}
            onChange={(e) => {
              setResult(e.target.value);
            }}
            className="result-input"
          />
        </div>

        <div className="button-main">
          <button
            style={{
              width: "100px",
              height: "30px",
              border: "none",
              backgroundColor: "green",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "20px",
            }}
            onClick={exchange}
          >
            Click
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
