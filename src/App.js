import React,{useState,useEffect} from "react";
import axios from "axios";
import {Route,Routes} from 'react-router-dom'
import Coins from "./components/Coins"
import Navbar from "./components/Navbar"
import Coin from './routes/Coin'

function App() {

  const [coinsData,setCoinsData]=useState([])

  const url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"

  useEffect(() => {
    axios.get(url).then((response)=>{
      setCoinsData(response.data)
      console.log(response.data[0])
    }).catch(error =>{
      console.log(error)
    })
  },[])

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Coins coins={coinsData} />} />
        <Route path='/coin' element={<Coin/>}>
        <Route path=':coinId' element={<Coin/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
