import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify'
import "./Coin.css"

const Coin = () => {
  const params = useParams();

  const rateIdentify=(obj)=>{
    return(
      obj > 0 ? <p className="green">{obj.toFixed(2)}%</p> : <p className="red">{obj.toFixed(2)}%</p>
    )
  }

  const [coinInfo, setCoinInfo] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?tickers=false&community_data=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoinInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="coin-container">

        <div className="content">
          <div className="rank">
            <h2 className="rank-btn">Rank # {coinInfo.market_cap_rank}</h2>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coinInfo.image ? (
                <img src={coinInfo.image.small} alt="" />
              ) : null}
              <p>{coinInfo.name}</p>
              {coinInfo.symbol ? (
                <p className="coin-symbol">{coinInfo.symbol.toUpperCase()}/USD</p>
              ) : null}
            </div>
            <div className="coin-price">
              {coinInfo.market_data?.current_price ? (
                <h1>
                  ${coinInfo.market_data.current_price.usd.toLocaleString()}
                </h1>
              ) : null}
            </div>
          </div>
        </div>
        <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th className="hide-mobile">14d</th>
                                <th>30d</th>
                                <th className="hide-mobile">1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coinInfo.market_data?.price_change_percentage_1h_in_currency ? rateIdentify(coinInfo.market_data.price_change_percentage_1h_in_currency.usd) : null}</td>
                                <td>{coinInfo.market_data?.price_change_percentage_24h_in_currency ? rateIdentify(coinInfo.market_data.price_change_percentage_24h_in_currency.usd) : null}</td>
                                <td>{coinInfo.market_data?.price_change_percentage_7d_in_currency ? rateIdentify(coinInfo.market_data.price_change_percentage_7d_in_currency.usd) : null}</td>
                                <td className="hide-mobile">{coinInfo.market_data?.price_change_percentage_14d_in_currency ? rateIdentify(coinInfo.market_data.price_change_percentage_14d_in_currency.usd) : null}</td>
                                <td>{coinInfo.market_data?.price_change_percentage_30d_in_currency ? rateIdentify(coinInfo.market_data.price_change_percentage_30d_in_currency.usd) : null}</td>
                                <td className="hide-mobile" >{coinInfo.market_data?.price_change_percentage_1y_in_currency ? rateIdentify(coinInfo.market_data.price_change_percentage_1y_in_currency.usd) : null}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coinInfo.market_data?.low_24h ? <p>${coinInfo.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coinInfo.market_data?.high_24h ? <p>${coinInfo.market_data.high_24h.usd.toLocaleString()}</p> : null}                            
                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coinInfo.market_data?.market_cap ? <p>${coinInfo.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coinInfo.market_data ? <p>{coinInfo.market_data.circulating_supply.toLocaleString()}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='about'>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coinInfo.description ? coinInfo.description.en : ''),
                        }}>
                        
                        </p>

                    </div>
                </div>
      </div>
    </div>
  );
};

export default Coin;
