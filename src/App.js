import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import Burgers from './components/Burgers';
import BurgerItem from './components/BurgerItem';
import ShoppingCart from './components/ShoppingCart';
import Payment from './components/Payment';

function App() {
  return (
<Router>
      <div> <Navbar></Navbar> </div>
      <div> <Header></Header> </div>

      <Routes>

        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/burgers" element={<Burgers />}></Route>
        <Route exact path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/burgers/:productId" element={<BurgerItem />}></Route>
        <Route exact path="/payment" element={<Payment />}></Route>

      </Routes>
      
      <div> <Footer></Footer> </div>
    </Router>
    
  );
}

export default App;