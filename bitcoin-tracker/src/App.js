import PropTypes from "prop-types";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [divider, setDivider] = useState(1);
  const [usd, setUsd] = useState(0);
  const onChange = (event) => {
    setUsd(event.target.value)
  }

  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])

  const onSelect = (event) => {
    setUsd(0)
    setDivider(event.target.value);
  }

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onSelect}>
        <option>
          Select Your Coin
        </option>
        {coins.map((coin) => (
        <option key={coin.id} value={coin.quotes.USD.price}>
          {coin.id}({coin.symbol}) : ${coin.quotes.USD.price}USD         
        </option>
        ))}
      </select>
      <hr />
      <label htmlFor="usds">USD</label>
      <input 
        id="usds"
        type="number"
        value={usd}
        placeholder="USD" 
        onChange={onChange}
      />
      <hr />
      <label htmlFor="btcs">Coin Units</label>
      <input 
        id="btcs"
        placeholder="BTC"
        value={usd/divider}
        disabled
      />
    </div>
  );
}

export default App;
