
import {Route,Routes} from 'react-router-dom'
import Coins from "./components/Coins"
import Navbar from "./components/Navbar"
import Coin from './routes/Coin'

function App() {

  return (
    <div>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/coin' element={<Coin/>}>
        <Route path=':coinId' element={<Coin/>} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
