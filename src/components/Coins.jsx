import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinItem from "./CoinItem";
import { FaSearch } from "react-icons/fa";

const Coins = () => {
  const [search, setSearch] = useState("");
  const [coinsData, setCoinsData] = useState([]);
  const [page,setPage]= useState(1)

  useEffect(() => {
    console.log("uu");
    fetchData(page)   
  }, [page]);

  const fetchData= async(pageNum)=>{
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageNum}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
      .then((response) => {
        setCoinsData((prevstate) => [...prevstate, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handlechange = (e) => {
    setSearch(e.target.value);
  };

  const loadMore = () => {
    setPage((prevstate)=> prevstate+1);
  }

  const filterCoins = coinsData.filter((coin) =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);

  console.log(coinsData)
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
      <button
        className="load-more"
        onClick={loadMore}
      >
        Load More
      </button>
    </div>
  );
};

export default Coins;
