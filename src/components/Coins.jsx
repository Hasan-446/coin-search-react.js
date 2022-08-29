import React, { useState } from "react";
import CoinItem from "./CoinItem";
import { FaSearch } from "react-icons/fa";

const Coins = (props) => {
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = props.coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <form action="">
        <div class="search-box">
          <button class="btn-search">
            <FaSearch></FaSearch>
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
            onChange={handlechange}
          />
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th className="rank">Rank</th>
            <th className="coin-name">Coin</th>
            <th className="current-price">Price</th>
            <th className="day-price">24h</th>
            <th className="week-price">7d</th>
            <th className="hide-mobile">Volume</th>
            <th className="hide-mobile">Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {filterCoins.map((coins) => {
            return <CoinItem coins={coins} key={coins.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
