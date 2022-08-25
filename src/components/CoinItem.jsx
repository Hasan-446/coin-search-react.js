import React from "react";
import {useNavigate} from 'react-router-dom';

const CoinItem = (props) => {

  const navigate= useNavigate();
  const handleRowClick =()=>{
    navigate(`/coin-search-react.js/coin/${props.coins.id}` )
  }

  const rateIdentify=(obj)=>{
    return(
      obj > 0 ? <p className="green">{obj.toFixed(2)}%</p> : <p className="red">{obj.toFixed(2)}%</p>
    )
  }

  return (
    <tr onClick={()=>handleRowClick()} >
      <td className="rank">{props.coins.market_cap_rank}</td>
      <td className="image-symbol">
        <img src={props.coins.image} alt="" className="coin-image" />
        <p className="coin-name-in-list" >{props.coins.name}</p>
      </td>
      <td className="current-price" >${props.coins.current_price.toLocaleString()}</td>
      <td className="day-price">
        {rateIdentify(props.coins.price_change_percentage_24h)}
      </td>
      <td className="week-price">
        {rateIdentify(props.coins.price_change_percentage_7d_in_currency)}
      </td>
      <td className="hide-mobile">
        ${props.coins.total_volume.toLocaleString()}
      </td>
      <td className="hide-mobile">
        ${props.coins.market_cap.toLocaleString()}
      </td>
    </tr>
  );
};

export default CoinItem;
