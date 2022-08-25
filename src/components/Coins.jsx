import React from "react";
import CoinItem from "./CoinItem";

const Coins = (props)=>{
    
    return(
       <div className="container">
                <table>
                <thead>
                <tr>
                    <th className="rank" >Rank</th>
                    <th className='coin-name'>Coin</th>
                    <th className="current-price">Price</th>
                    <th className="day-price">24h</th>
                    <th className="week-price">7d</th>
                    <th className='hide-mobile'>Volume</th>
                    <th className='hide-mobile'>Mkt Cap</th>
                </tr>
                </thead>    
                <tbody>
                {props.coins.map(coins=>{
                     return (       
                            <CoinItem coins={coins} key={coins.id} />
                        
                    )
                })}
                </tbody>
           
            </table>
 
       </div>
       
        )
}

export default Coins;